const SERVICES = [
  {
    id:"neurophoto", emoji:"✧", title:"Нейрофотосессия",
    description:"Новые образы, локации и красивые портреты",
    intro:"Расскажите, какие фотографии хотите получить.",
    questions:[
      {id:"subject",label:"Для кого создаём фотографии?",type:"text",required:true,placeholder:"Например, для себя или семьи"},
      {id:"people",label:"Сколько человек будет в кадре?",type:"select",options:["Один человек","Два человека","Семья или группа","Пока не знаю"],required:true},
      {id:"quantity",label:"Сколько готовых изображений нужно?",type:"select",options:["5–10","10–20","20 и более","Нужна рекомендация"],required:true},
      {id:"style",label:"Предпочтительный стиль",type:"multi",options:["Реалистичная фотосессия","Деловой портрет","Fashion / журнальная съёмка","Романтический образ","Семейная фотосессия","Фэнтези или сказочный образ","Другое"],required:true},
      {id:"location",label:"Желаемые локации и образы",type:"textarea",placeholder:"Студия, природа, город, путешествие, одежда…",full:true},
      {id:"identity",label:"Насколько важно сохранить внешность 1:1?",type:"select",options:["Максимально сохранить внешность","Можно художественно менять образ","Обсудить со студией"],required:true},
      {id:"preserve",label:"Что обязательно сохранить или не менять?",type:"textarea",placeholder:"Черты лица, цвет глаз, причёска, особенности…",full:true},
      {id:"references",label:"Ссылки на исходные фотографии и референсы",type:"textarea",placeholder:"Вставьте ссылки на материалы (Google Drive, облако и т. п.)",full:true,help:"Файлы не загружаются на сайт — укажите ссылки с доступом для просмотра."}
    ]
  },
  {
    id:"greeting",emoji:"🎁",title:"Мультфильм-поздравление",
    description:"Персональная история к празднику",
    intro:"Подготовим поздравление, которое адресовано именно вашему близкому.",
    questions:[
      {id:"occasion",label:"Какой праздник?",type:"select",options:["День рождения","Новый год","Годовщина","Выпускной","Профессиональный праздник","Другое"],required:true},
      {id:"recipient",label:"Имя и возраст получателя",type:"text",required:true,placeholder:"Например, Маша, 5 лет"},
      {id:"hero",label:"Кто поздравляет?",type:"multi",options:["Дед Мороз","Сказочный герой","Любимый персонаж","Родственник","Персонаж по моей идее","Нужна рекомендация"],required:true},
      {id:"style",label:"Стиль мультфильма",type:"select",options:["3D-анимация","Сказочный","Рисованный","Кинематографический","На усмотрение студии"],required:true},
      {id:"message",label:"Что герой должен сказать?",type:"textarea",placeholder:"Готовый текст или основные мысли",full:true},
      {id:"personal",label:"Личные факты, увлечения и пожелания",type:"textarea",placeholder:"Что сделает поздравление личным и особенным?",full:true},
      {id:"script",label:"Кто готовит сценарий?",type:"select",options:["Студия предлагает сценарий","У меня есть готовый сценарий","Хочу обсудить вместе"],required:true},
      {id:"voice",label:"Пожелания по озвучке и музыке",type:"textarea",placeholder:"Голос, язык, музыка, субтитры…",full:true},
      {id:"references",label:"Ссылки на фото и примеры",type:"textarea",placeholder:"Добавьте ссылки на материалы",full:true,help:"Не вставляйте закрытые ссылки — студии должен быть доступен просмотр."}
    ]
  },
  {
    id:"child-cartoon",emoji:"🚀",title:"Мультфильм с участием ребёнка",
    description:"Ребёнок становится главным героем приключения",
    intro:"Помогите нам придумать историю, в которой ребёнок узнает себя.",
    questions:[
      {id:"childName",label:"Имя главного героя",type:"text",required:true,placeholder:"Имя ребёнка"},
      {id:"childAge",label:"Возраст ребёнка",type:"text",required:true,placeholder:"Например, 3 года"},
      {id:"characters",label:"Любимые персонажи и увлечения",type:"textarea",placeholder:"Динозавры, космос, машинки, принцессы…",full:true},
      {id:"plot",label:"Какое приключение хочется?",type:"multi",options:["Космическое путешествие","Спасение волшебного мира","Приключение с динозаврами","Сказочное королевство","История с любимыми игрушками","Свой сюжет"],required:true},
      {id:"participants",label:"Кто ещё появится в истории?",type:"textarea",placeholder:"Родители, братья, сёстры, друзья, питомцы…",full:true},
      {id:"style",label:"Стиль анимации",type:"select",options:["3D-мультфильм","Сказочная иллюстрация","2D-мультфильм","Обсудить со студией"],required:true},
      {id:"duration",label:"Продолжительность",type:"select",options:["До 1 минуты","1–3 минуты","3–5 минут","Более 5 минут","Нужна рекомендация"],required:true},
      {id:"voice",label:"Озвучка и финал",type:"textarea",placeholder:"Кто говорит, какой финал хочется увидеть?",full:true},
      {id:"references",label:"Ссылки на фото ребёнка и референсы",type:"textarea",placeholder:"Вставьте ссылки на материалы",full:true,help:"Используйте ссылки с доступом для просмотра. Не отправляйте медицинские или другие лишние чувствительные сведения."},
      {id:"avoid",label:"Что не следует включать в историю?",type:"textarea",placeholder:"Страхи, нежелательные герои или сцены",full:true}
    ]
  },
  {
    id:"storybook",emoji:"📖",title:"Электронная книга с ребёнком",
    description:"Сказка, где ребёнок — главный герой",
    intro:"Определим сюжет, оформление и формат вашей персональной книги.",
    questions:[
      {id:"hero",label:"Имя и возраст главного героя",type:"text",required:true,placeholder:"Имя и возраст"},
      {id:"occasion",label:"Для какого события создаётся книга?",type:"select",options:["Подарок на день рождения","Подарок без повода","Сказка на ночь","Семейная история","Другое"],required:true},
      {id:"genre",label:"Тип истории",type:"multi",options:["Волшебная сказка","Приключение","История о дружбе","Познавательная история","Сказка на ночь","История о семье"],required:true},
      {id:"message",label:"Какую идею должна передавать книга?",type:"textarea",placeholder:"Доброта, смелость, дружба, любознательность…",full:true},
      {id:"characters",label:"Другие персонажи и увлечения ребёнка",type:"textarea",placeholder:"Кого и что включить в историю?",full:true},
      {id:"length",label:"Желаемый объём",type:"select",options:["Короткая сказка","10–15 страниц","20–30 страниц","Нужна рекомендация"],required:true},
      {id:"illustration",label:"Стиль иллюстраций",type:"select",options:["3D-анимация","Акварельная сказка","Книжная цифровая иллюстрация","Мультяшный стиль","Обсудить со студией"],required:true},
      {id:"format",label:"Формат готовой книги",type:"multi",options:["PDF для чтения","Файл для печати","Оба варианта"],required:true},
      {id:"references",label:"Ссылки на фотографии и примеры стиля",type:"textarea",placeholder:"Вставьте ссылки на материалы",full:true}
    ]
  },
  {
    id:"ai-adventure",emoji:"🪄",title:"ИИ-авантюра и говорящие персонажи",
    description:"Необычные превращения, ожившие герои и фантастические сцены",
    intro:"Опишите задумку — чем точнее идея, тем легче подготовить сценарий.",
    questions:[
      {id:"format",label:"Что создаём?",type:"multi",options:["ИИ-авантюра с человеком","Говорящий персонаж","Говорящий питомец","Фантастическая сцена","Юмористический ролик"],required:true},
      {id:"hero",label:"Кто главный герой?",type:"text",required:true,placeholder:"Человек, питомец, персонаж…"},
      {id:"action",label:"Что происходит в видео?",type:"textarea",required:true,placeholder:"Опишите идею или действие",full:true},
      {id:"setting",label:"Локация и визуальный стиль",type:"textarea",placeholder:"Город, космос, сказочный мир; реализм, фантастика…",full:true},
      {id:"speech",label:"Что должен сказать персонаж?",type:"textarea",placeholder:"Текст реплики или смысл",full:true},
      {id:"voice",label:"Голос и язык",type:"text",placeholder:"Например, добрый женский голос на русском"},
      {id:"lipSync",label:"Нужна ли синхронизация губ?",type:"select",options:["Да","Нет","По ситуации"],required:true},
      {id:"duration",label:"Продолжительность",type:"select",options:["До 15 секунд","15–30 секунд","30–60 секунд","Более минуты"],required:true},
      {id:"ratio",label:"Формат видео",type:"select",options:["Вертикальный 9:16","Квадратный 1:1","Горизонтальный 16:9","Нужна рекомендация"],required:true},
      {id:"references",label:"Ссылки на исходники и референсы",type:"textarea",placeholder:"Вставьте ссылки на материалы",full:true}
    ]
  },
  {
    id:"cinematic",emoji:"🎬",title:"Кинематографический ролик",
    description:"Атмосферное видео с настроением настоящего кино",
    intro:"Соберём творческий бриф: история, настроение, визуальный стиль и финал.",
    questions:[
      {id:"goal",label:"Цель ролика",type:"select",options:["Личный проект","Подарок","Реклама","История о человеке","Контент для социальных сетей","Другое"],required:true},
      {id:"genre",label:"Жанр",type:"select",options:["Короткометражная история","Трейлер фильма","Fashion film","Музыкальный клип","Рекламный ролик","Другое"],required:true},
      {id:"story",label:"Какую историю рассказываем?",type:"textarea",required:true,placeholder:"Главная идея, персонажи, ключевые события…",full:true},
      {id:"mood",label:"Настроение",type:"multi",options:["Драматичное","Романтичное","Ностальгическое","Вдохновляющее","Напряжённое","Мечтательное"],required:true},
      {id:"location",label:"Локация, время суток, свет",type:"textarea",placeholder:"Где происходит действие и как выглядит кадр?",full:true},
      {id:"camera",label:"Пожелания к съёмке и монтажу",type:"textarea",placeholder:"Движение камеры, крупные планы, переходы…",full:true},
      {id:"audio",label:"Звук",type:"multi",options:["Музыка без речи","Закадровый голос","Диалоги","Звуковые эффекты"],required:true},
      {id:"duration",label:"Продолжительность",type:"select",options:["До 15 секунд","15–30 секунд","30–60 секунд","1–3 минуты","Более 3 минут"],required:true},
      {id:"platform",label:"Где будет опубликован ролик?",type:"select",options:["Instagram / Reels","TikTok","YouTube","Личный архив","Реклама","Другое"],required:true},
      {id:"references",label:"Ссылки на видео, фото и референсы",type:"textarea",placeholder:"Вставьте ссылки на примеры",full:true}
    ]
  },
  {
    id:"song",emoji:"🎵",title:"Персонализированная песня",
    description:"Песня с именем, личными историями и тёплыми пожеланиями",
    intro:"Соберём детали, из которых получится песня именно для вашего человека.",
    questions:[
      {id:"recipient",label:"Кого поздравляем? Имя и возраст",type:"text",required:true,placeholder:"Имя и возраст"},
      {id:"occasion",label:"Праздник или повод",type:"select",options:["День рождения","Свадьба / годовщина","Новый год","День матери / отца","Профессиональный праздник","Без повода","Другое"],required:true},
      {id:"relation",label:"Кем вы приходитесь получателю?",type:"text",required:true,placeholder:"Мама, друг, супруг, коллега…"},
      {id:"memories",label:"Личные истории и важные воспоминания",type:"textarea",placeholder:"Моменты, привычки, семейные шутки…",full:true},
      {id:"qualities",label:"Какие качества подчеркнуть?",type:"textarea",placeholder:"Что вы особенно цените в этом человеке?",full:true},
      {id:"style",label:"Музыкальный стиль",type:"multi",options:["Поп","Лирическая баллада","Рок","Рэп","Детская песня","Народный стиль","Юмористическая песня"],required:true},
      {id:"mood",label:"Атмосфера",type:"select",options:["Весёлая","Трогательная","Торжественная","Романтическая","Юмористическая"],required:true},
      {id:"voice",label:"Пожелания к голосу",type:"text",placeholder:"Мужской, женский, детский, энергичный…"},
      {id:"mustInclude",label:"Фразы или пожелания, которые обязательно включить",type:"textarea",placeholder:"Имена, особые слова, пожелания",full:true},
      {id:"video",label:"Нужно ли музыкальное видео?",type:"select",options:["Да","Нет","Хочу узнать варианты"],required:true},
      {id:"references",label:"Ссылки на музыкальные примеры",type:"textarea",placeholder:"Ссылки на песни, настроение которых нравится",full:true}
    ]
  }
];

const form = document.querySelector("#order-form");
const serviceGrid = document.querySelector("#service-grid");
const questionnaires = document.querySelector("#questionnaires");
const selectedCount = document.querySelector("#selected-count");
const submitButton = document.querySelector("#submit-button");
const formError = document.querySelector("#form-error");
const formSuccess = document.querySelector("#form-success");
const selected = new Set();

document.querySelector("#year").textContent = new Date().getFullYear();

function renderServiceCards() {
  serviceGrid.innerHTML = SERVICES.map(s => `
    <button class="service-card" type="button" data-service="${s.id}" aria-pressed="false">
      <span class="service-check" aria-hidden="true">✓</span>
      <span class="service-emoji" aria-hidden="true">${s.emoji}</span>
      <span class="service-title">${s.title}</span>
      <span class="service-description">${s.description}</span>
    </button>`).join("");
  serviceGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-service]");
    if (!button) return;
    const id = button.dataset.service;
    selected.has(id) ? selected.delete(id) : selected.add(id);
    button.setAttribute("aria-pressed", String(selected.has(id)));
    selectedCount.textContent = selected.size;
    renderQuestionnaires();
    hideMessages();
  });
}

function renderQuestion(q, serviceId) {
  const name = `${serviceId}.${q.id}`;
  const required = q.required ? "required" : "";
  const requiredMark = q.required ? ' <b>*</b>' : "";
  let control = "";
  if (q.type === "select") {
    control = `<select name="${name}" ${required}><option value="">Выберите вариант</option>${q.options.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("")}</select>`;
  } else if (q.type === "multi") {
    control = `<div class="choice-list">${q.options.map((o,i) => `<label class="choice-option"><input type="checkbox" name="${name}" value="${escapeHtml(o)}"><span>${escapeHtml(o)}</span></label>`).join("")}</div>${q.required ? `<input class="multi-required-marker" data-multi-required="${name}" tabindex="-1" aria-hidden="true" required>` : ""}`;
  } else if (q.type === "textarea") {
    control = `<textarea name="${name}" rows="3" maxlength="1800" ${required} placeholder="${escapeHtml(q.placeholder || "Ваш ответ…")}"></textarea>`;
  } else {
    control = `<input name="${name}" maxlength="500" ${required} placeholder="${escapeHtml(q.placeholder || "Ваш ответ…")}">`;
  }
  return `<label class="field ${q.full ? "full-width" : ""}"><span>${escapeHtml(q.label)}${requiredMark}</span>${control}${q.help ? `<small class="question-help">${escapeHtml(q.help)}</small>` : ""}</label>`;
}

function renderQuestionnaires() {
  questionnaires.innerHTML = SERVICES.filter(s => selected.has(s.id)).map((s,index) => `
    <section class="form-panel questionnaire" data-questionnaire="${s.id}">
      <div class="panel-heading">
        <div class="section-icon">${String(index+2).padStart(2,"0")}</div>
        <div><div class="eyebrow">${s.emoji} АНКЕТА УСЛУГИ</div><h3>${s.title}</h3><p>${s.intro}</p></div>
      </div>
      <div class="question-list">${s.questions.map(q => renderQuestion(q,s.id)).join("")}</div>
    </section>`).join("");
  questionnaires.querySelectorAll(".multi-required-marker").forEach(marker => {
    marker.required = false;
    marker.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;pointer-events:none";
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function hideMessages() { formError.hidden = true; formSuccess.hidden = true; formError.textContent = ""; formSuccess.textContent = ""; }

function validateForm() {
  if (!selected.size) {
    showError("Сначала выберите хотя бы одну услугу.");
    serviceGrid.scrollIntoView({behavior:"smooth",block:"center"});
    return false;
  }
  const required = [...form.querySelectorAll("[required]")].filter(el => !el.classList.contains("multi-required-marker"));
  for (const el of required) {
    if (el.type === "checkbox" && el.name === "consent" && !el.checked) {
      el.focus(); showError("Пожалуйста, подтвердите согласие на обработку данных."); return false;
    }
    if (el.type !== "checkbox" && !String(el.value || "").trim()) {
      el.focus();
      el.closest(".field, .consent")?.scrollIntoView({behavior:"smooth",block:"center"});
      showError("Пожалуйста, заполните обязательные поля, отмеченные звёздочкой."); return false;
    }
  }
  for (const service of SERVICES.filter(s => selected.has(s.id))) {
    for (const q of service.questions.filter(q => q.required && q.type === "multi")) {
      if (!form.querySelectorAll(`input[name="${CSS.escape(service.id+"."+q.id)}"]:checked`).length) {
        const section = form.querySelector(`[data-questionnaire="${service.id}"]`);
        section.scrollIntoView({behavior:"smooth",block:"center"});
        showError(`Выберите хотя бы один вариант в поле «${q.label}».`); return false;
      }
    }
  }
  return true;
}
function showError(message) { formError.textContent = message; formError.hidden = false; formSuccess.hidden = true; }

function getValue(name) {
  const els = [...form.querySelectorAll(`[name="${CSS.escape(name)}"]`)];
  if (els.length && els[0].type === "checkbox") return els.filter(el=>el.checked).map(el=>el.value);
  return (els[0]?.value || "").trim();
}
function collectSubmission() {
  const common = {
    fullName:getValue("fullName"),
    contact:getValue("contact"),
    email:getValue("email"),
    deadline:getValue("deadline"),
    comments:getValue("comments")
  };
  const services = SERVICES.filter(s=>selected.has(s.id)).map(s=>({
    id:s.id,
    title:s.title,
    answers:s.questions.map(q=>({question:q.label,answer:getValue(`${s.id}.${q.id}`)}))
      .filter(item=>Array.isArray(item.answer) ? item.answer.length : item.answer)
  }));
  return {common,services,consent:true,website:getValue("website"),submittedAt:new Date().toISOString()};
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  hideMessages();
  if (!validateForm()) return;
  submitButton.disabled = true;
  submitButton.innerHTML = 'Отправляем заявку <span aria-hidden="true">…</span>';
  try {
    const response = await fetch("/api/submit", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(collectSubmission())
    });
    const result = await response.json().catch(()=>({}));
    if (!response.ok) throw new Error(result.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
    formSuccess.textContent = "Заявка отправлена! Спасибо — студия L&A Wonder получила ваши ответы.";
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({behavior:"smooth",block:"center"});
    form.reset();
    selected.clear();
    serviceGrid.querySelectorAll("[data-service]").forEach(b=>b.setAttribute("aria-pressed","false"));
    selectedCount.textContent = "0";
    renderQuestionnaires();
  } catch (error) {
    showError(error.message || "Не удалось отправить заявку. Проверьте подключение и попробуйте ещё раз.");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Отправить заявку <span aria-hidden="true">→</span>';
  }
});

renderServiceCards();
