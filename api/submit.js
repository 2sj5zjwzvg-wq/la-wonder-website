const ALLOWED_SERVICES = new Set([
  "neurophoto","greeting","child-cartoon","storybook","ai-adventure","cinematic","song"
]);
const MAX_BODY_BYTES = 48 * 1024;
const MAX_MESSAGE_CHARS = 3800;

function clean(value, max = 1800) {
  if (Array.isArray(value)) return value.slice(0,20).map(v=>clean(v,250));
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,"").trim().slice(0,max);
}
function safeObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function formatAnswer(value) {
  if (Array.isArray(value)) return value.map(v=>clean(v,250)).join(", ");
  return clean(value,1800) || "Не указано";
}
function buildMessages(data) {
  const common = safeObject(data.common);
  const services = Array.isArray(data.services) ? data.services.slice(0,7) : [];
  const lines = [
    "✨ НОВАЯ ЗАЯВКА — L&A WONDER",
    "",
    `ФИО: ${clean(common.fullName,160) || "Не указано"}`,
    `Контакт: ${clean(common.contact,120) || "Не указан"}`,
    `Email: ${clean(common.email,160) || "Не указан"}`,
    `Желаемый срок: ${clean(common.deadline,120) || "Не указан"}`,
    `Дата заявки: ${new Date().toLocaleString("ru-RU",{timeZone:"Europe/Moscow"})}`,
    "",
    "ВЫБРАННЫЕ УСЛУГИ:"
  ];
  services.forEach((service,index) => {
    const title = clean(service.title,120) || "Услуга";
    lines.push("", `${index+1}. ${title.toUpperCase()}`);
    const answers = Array.isArray(service.answers) ? service.answers.slice(0,35) : [];
    answers.forEach(item => {
      const q = clean(safeObject(item).question,250);
      const a = formatAnswer(safeObject(item).answer);
      if (q) lines.push(`${q}\n${a}`);
    });
  });
  if (common.comments) lines.push("", "ДОПОЛНИТЕЛЬНЫЕ КОММЕНТАРИИ:", clean(common.comments,1800));
  lines.push("", "Примечание: ссылки на материалы указаны клиентом; файловые вложения сайт не принимает.");
  const whole = lines.join("\n");
  const chunks = [];
  for (let i=0; i<whole.length; i+=MAX_MESSAGE_CHARS) chunks.push(whole.slice(i,i+MAX_MESSAGE_CHARS));
  return chunks;
}

module.exports = async (req,res) => {
  res.setHeader("Content-Type","application/json; charset=utf-8");
  res.setHeader("Cache-Control","no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow","POST");
    return res.status(405).json({error:"Метод не поддерживается."});
  }
  const rawLength = Number(req.headers["content-length"] || 0);
  if (rawLength > MAX_BODY_BYTES) return res.status(413).json({error:"Анкета слишком большая."});
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return res.status(400).json({error:"Некорректные данные формы."}); }
  }
  body = safeObject(body);
  if (body.website) return res.status(200).json({ok:true}); // honeypot for basic bot filtering
  const common = safeObject(body.common);
  if (!clean(common.fullName,160) || !clean(common.contact,120)) {
    return res.status(400).json({error:"Укажите ФИО и контакт для связи."});
  }
  if (!Array.isArray(body.services) || body.services.length < 1 || body.services.length > 7) {
    return res.status(400).json({error:"Выберите от одной до семи услуг."});
  }
  for (const s of body.services) {
    if (!ALLOWED_SERVICES.has(clean(safeObject(s).id,60))) return res.status(400).json({error:"В заявке обнаружена неизвестная услуга."});
  }
  if (body.consent !== true) return res.status(400).json({error:"Необходимо согласие на обработку данных."});

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Missing Telegram environment variables");
    return res.status(503).json({error:"Приём заявок пока не настроен. Пожалуйста, попробуйте позже."});
  }

  try {
    const messages = buildMessages(body);
    for (const text of messages) {
      const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({chat_id:chatId,text,disable_web_page_preview:true})
      });
      const result = await tgResponse.json();
      if (!tgResponse.ok || !result.ok) {
        console.error("Telegram delivery failed", {
  status: tgResponse.status,
  code: result.error_code,
  description: result.description
});
        return res.status(502).json({error:"Не удалось доставить заявку в Telegram. Попробуйте ещё раз позже."});
      }
    }
    return res.status(200).json({ok:true});
  } catch (error) {
    console.error("Submission processing failed", error.message);
    return res.status(502).json({error:"Ошибка при отправке заявки. Попробуйте ещё раз позже."});
  }
};
