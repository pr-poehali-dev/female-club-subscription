export const HERO_IMG = "https://cdn.poehali.dev/projects/3da5cd07-b830-44c9-b19b-a7cdc31cccb5/files/7aea5147-18e9-4ee7-bab7-cd6d8011f69b.jpg";
export const MASTER_IMG = "https://cdn.poehali.dev/projects/3da5cd07-b830-44c9-b19b-a7cdc31cccb5/files/86768983-c27f-43af-bd88-1f4924284a0b.jpg";

export type Section = "home" | "about" | "community" | "meetings" | "subscribe" | "cabinet" | "chat";

export interface ChatMessage {
  id: number;
  author: string;
  initial: string;
  role: string;
  text: string;
  time: string;
  mine?: boolean;
}

export const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О клубе" },
  { id: "meetings", label: "Встречи" },
  { id: "community", label: "Сообщество" },
  { id: "chat", label: "Чат" },
  { id: "subscribe", label: "Подписка" },
];

export const MEMBERS = [
  { name: "Анна К.", role: "Предприниматель", city: "Москва", initial: "А" },
  { name: "Мария Л.", role: "Арт-директор", city: "СПб", initial: "М" },
  { name: "София Р.", role: "Коуч", city: "Казань", initial: "С" },
  { name: "Елена В.", role: "Психолог", city: "Новосибирск", initial: "Е" },
  { name: "Дарья М.", role: "Юрист", city: "Екатеринбург", initial: "Д" },
  { name: "Ирина Т.", role: "Финансист", city: "Ростов-на-Дону", initial: "И" },
];

export const MEETINGS = [
  { date: "24 апреля", time: "19:00", title: "Как выстроить границы в бизнесе", speaker: "Анна Соколова", tag: "Психология" },
  { date: "1 мая", time: "18:30", title: "Финансовая независимость: с чего начать", speaker: "Мария Громова", tag: "Финансы" },
  { date: "15 мая", time: "19:00", title: "Нетворкинг без усилий", speaker: "Елена Петрова", tag: "Карьера" },
];

export const PLANS = [
  {
    name: "Базовый",
    price: "2 900",
    period: "мес",
    features: ["Доступ к сообществу", "2 встречи в месяц", "Архив записей"],
    featured: false,
  },
  {
    name: "Клубный",
    price: "5 900",
    period: "мес",
    features: ["Доступ к сообществу", "Все встречи и мастер-классы", "Архив записей", "Личный куратор", "Закрытый чат"],
    featured: true,
  },
  {
    name: "Годовой",
    price: "49 900",
    period: "год",
    features: ["Всё из Клубного", "Скидка 30%", "VIP-встречи офлайн", "Прямой доступ к спикерам"],
    featured: false,
  },
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 1, author: "Анна К.", initial: "А", role: "Предприниматель", text: "Всем доброе утро! Кто-нибудь был на вчерашней встрече с Еленой? Очень хотела, но не смогла подключиться 😔", time: "09:14" },
  { id: 2, author: "Мария Л.", initial: "М", role: "Арт-директор", text: "Была! Это было невероятно. Запись уже загружена в кабинет, не пропусти ✨", time: "09:22" },
  { id: 3, author: "София Р.", initial: "С", role: "Коуч", text: "Согласна с Машей. Особенно часть про выстраивание границ в команде — прямо в точку попало.", time: "09:31" },
  { id: 4, author: "Елена В.", initial: "Е", role: "Психолог", text: "Девочки, спасибо за тёплые слова 💛 Если есть вопросы — пишите, отвечу в течение дня.", time: "10:05" },
  { id: 5, author: "Дарья М.", initial: "Д", role: "Юрист", text: "Елена, у меня уже есть вопрос 😄 Как вы рекомендуете работать с клиентами, которые постоянно переступают договорённости?", time: "10:18" },
  { id: 6, author: "Ирина Т.", initial: "И", role: "Финансист", text: "Очень актуальная тема, Даша. Я со своей стороны могу добавить финансовый аспект — часто это связано с размытыми условиями в договоре.", time: "10:45" },
  { id: 7, author: "Мария Л.", initial: "М", role: "Арт-директор", text: "Кстати, напоминаю: в следующую пятницу у нас встреча по нетворкингу. Запишитесь заранее, мест мало 🌿", time: "11:03" },
];
