import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3da5cd07-b830-44c9-b19b-a7cdc31cccb5/files/7aea5147-18e9-4ee7-bab7-cd6d8011f69b.jpg";
const MASTER_IMG = "https://cdn.poehali.dev/projects/3da5cd07-b830-44c9-b19b-a7cdc31cccb5/files/86768983-c27f-43af-bd88-1f4924284a0b.jpg";

type Section = "home" | "about" | "community" | "meetings" | "subscribe" | "cabinet";

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О клубе" },
  { id: "meetings", label: "Встречи" },
  { id: "community", label: "Сообщество" },
  { id: "subscribe", label: "Подписка" },
];

const MEMBERS = [
  { name: "Анна К.", role: "Предприниматель", city: "Москва", initial: "А" },
  { name: "Мария Л.", role: "Арт-директор", city: "СПб", initial: "М" },
  { name: "София Р.", role: "Коуч", city: "Казань", initial: "С" },
  { name: "Елена В.", role: "Психолог", city: "Новосибирск", initial: "Е" },
  { name: "Дарья М.", role: "Юрист", city: "Екатеринбург", initial: "Д" },
  { name: "Ирина Т.", role: "Финансист", city: "Ростов-на-Дону", initial: "И" },
];

const MEETINGS = [
  { date: "24 апреля", time: "19:00", title: "Как выстроить границы в бизнесе", speaker: "Анна Соколова", tag: "Психология" },
  { date: "1 мая", time: "18:30", title: "Финансовая независимость: с чего начать", speaker: "Мария Громова", tag: "Финансы" },
  { date: "15 мая", time: "19:00", title: "Нетворкинг без усилий", speaker: "Елена Петрова", tag: "Карьера" },
];

const PLANS = [
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

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (section: Section) => {
    setActive(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-taupe/30" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="font-display text-xl font-light tracking-widest uppercase"
            style={{ color: "var(--graphite)" }}
          >
            Клуб
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm tracking-wider uppercase transition-colors duration-200 link-elegant ${
                  active === item.id ? "font-medium" : ""
                }`}
                style={{ color: active === item.id ? "var(--graphite)" : "var(--warm-mid)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("cabinet")}
              className="hidden md:flex items-center gap-2 text-sm tracking-wider uppercase transition-colors"
              style={{ color: "var(--warm-mid)" }}
            >
              <Icon name="User" size={16} />
              Войти
            </button>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "var(--graphite)" }}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-taupe/30 px-6 py-6 flex flex-col gap-5" style={{ backgroundColor: "var(--cream)" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-left text-sm tracking-wider uppercase"
                style={{ color: "var(--graphite)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate("cabinet")}
              className="text-left text-sm tracking-wider uppercase"
              style={{ color: "var(--warm-mid)" }}
            >
              Войти
            </button>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* ==================== HOME ==================== */}
        {active === "home" && (
          <div>
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
              <div className="absolute inset-0">
                <img src={HERO_IMG} alt="Клуб" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(247,244,240,0.65)" }} />
              </div>
              <div className="relative max-w-6xl mx-auto px-6 py-24">
                <p className="text-xs tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0-init" style={{ color: "var(--warm-mid)" }}>
                  Закрытое женское сообщество
                </p>
                <h1 className="font-display text-6xl md:text-8xl font-light leading-none mb-8 animate-fade-up opacity-0-init delay-200" style={{ color: "var(--graphite)" }}>
                  Место, где<br />
                  <em className="font-light italic">вы растёте</em>
                </h1>
                <p className="max-w-md text-base leading-relaxed mb-12 animate-fade-up opacity-0-init delay-300" style={{ color: "var(--warm-mid)" }}>
                  Онлайн-встречи, мастер-классы и сообщество женщин, которые двигаются вперёд вместе.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-init delay-400">
                  <button
                    onClick={() => navigate("subscribe")}
                    className="px-10 py-3.5 text-sm tracking-widest uppercase transition-colors duration-300"
                    style={{ backgroundColor: "var(--graphite)", color: "var(--cream)" }}
                  >
                    Вступить в клуб
                  </button>
                  <button
                    onClick={() => navigate("about")}
                    className="px-10 py-3.5 text-sm tracking-widest uppercase transition-colors duration-300"
                    style={{ border: "1px solid rgba(35,31,26,0.35)", color: "var(--graphite)", backgroundColor: "transparent" }}
                  >
                    Узнать больше
                  </button>
                </div>
              </div>
            </section>

            <section className="border-y border-taupe/30 py-12">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 divide-x divide-taupe/30">
                {[
                  { n: "500+", label: "участниц" },
                  { n: "48", label: "встреч в год" },
                  { n: "12", label: "городов" },
                ].map((s) => (
                  <div key={s.label} className="px-8 text-center">
                    <p className="font-display text-4xl font-light" style={{ color: "var(--graphite)" }}>{s.n}</p>
                    <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--warm-mid)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--taupe)" }}>Ближайшие события</p>
                  <h2 className="font-display text-4xl font-light" style={{ color: "var(--graphite)" }}>Онлайн-встречи</h2>
                </div>
                <button
                  onClick={() => navigate("meetings")}
                  className="hidden md:block text-sm tracking-widest uppercase link-elegant"
                  style={{ color: "var(--warm-mid)" }}
                >
                  Все встречи →
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
                {MEETINGS.map((m) => (
                  <div key={m.title} className="p-8 transition-colors duration-200" style={{ backgroundColor: "var(--cream)" }}>
                    <span className="text-xs tracking-widest uppercase px-2 py-0.5 border" style={{ color: "var(--taupe)", borderColor: "rgba(200,184,168,0.4)" }}>{m.tag}</span>
                    <p className="mt-5 font-display text-xl font-light leading-snug" style={{ color: "var(--graphite)" }}>{m.title}</p>
                    <p className="mt-3 text-sm" style={{ color: "var(--warm-mid)" }}>{m.speaker}</p>
                    <div className="mt-6 pt-6 flex items-center gap-3 text-xs tracking-wider" style={{ borderTop: "1px solid rgba(200,184,168,0.3)", color: "var(--taupe)" }}>
                      <Icon name="Calendar" size={12} />
                      {m.date} · {m.time}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==================== ABOUT ==================== */}
        {active === "about" && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--taupe)" }}>О клубе</p>
            <h2 className="font-display text-5xl md:text-7xl font-light mb-16 animate-fade-up opacity-0-init delay-100" style={{ color: "var(--graphite)" }}>
              Пространство<br /><em>для настоящего</em>
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20 animate-fade-up opacity-0-init delay-200">
              <div>
                <p className="text-base leading-loose mb-8" style={{ color: "var(--warm-mid)" }}>
                  Клуб создан для женщин, которые ценят своё время и стремятся к осознанному развитию. Здесь нет лишнего шума — только живые встречи, честные разговоры и поддержка.
                </p>
                <p className="text-base leading-loose" style={{ color: "var(--warm-mid)" }}>
                  Каждый месяц мы проводим онлайн-встречи с экспертами, мастер-классы по важным темам и закрытые сессии для участниц.
                </p>
              </div>
              <img src={MASTER_IMG} alt="Онлайн-встреча" className="w-full object-cover aspect-[4/3]" />
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
              {[
                { icon: "Video", title: "Онлайн-встречи", desc: "Встречаемся каждую неделю — живые разговоры, а не записи" },
                { icon: "Users", title: "Сообщество", desc: "Закрытый чат, знакомства и взаимная поддержка участниц" },
                { icon: "BookOpen", title: "Мастер-классы", desc: "Практические занятия с экспертами раз в две недели" },
              ].map((f) => (
                <div key={f.title} className="p-10" style={{ backgroundColor: "var(--cream)" }}>
                  <Icon name={f.icon} size={20} className="mb-5" style={{ color: "var(--taupe)" }} />
                  <h3 className="font-display text-xl font-light mb-3" style={{ color: "var(--graphite)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-mid)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MEETINGS ==================== */}
        {active === "meetings" && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--taupe)" }}>Расписание</p>
            <h2 className="font-display text-5xl md:text-7xl font-light mb-16 animate-fade-up opacity-0-init delay-100" style={{ color: "var(--graphite)" }}>
              Встречи<br /><em>и мастер-классы</em>
            </h2>

            <div className="space-y-px animate-fade-up opacity-0-init delay-200">
              {MEETINGS.map((m) => (
                <div
                  key={m.title}
                  className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-8 cursor-pointer transition-colors duration-200"
                  style={{ borderBottom: "1px solid rgba(200,184,168,0.3)" }}
                >
                  <div className="md:w-36 text-xs tracking-widest uppercase flex-shrink-0" style={{ color: "var(--taupe)" }}>
                    <span>{m.date}</span>
                    <br />
                    <span style={{ color: "var(--warm-mid)" }}>{m.time} МСК</span>
                  </div>
                  <div className="flex-1 md:px-8 pl-6 md:pl-8" style={{ borderLeft: "1px solid rgba(200,184,168,0.25)" }}>
                    <span className="text-xs tracking-widest uppercase" style={{ color: "var(--taupe)" }}>{m.tag}</span>
                    <p className="font-display text-2xl font-light mt-1" style={{ color: "var(--graphite)" }}>{m.title}</p>
                    <p className="text-sm mt-1" style={{ color: "var(--warm-mid)" }}>{m.speaker}</p>
                  </div>
                  <div className="md:w-40 flex-shrink-0 flex justify-start md:justify-end">
                    <button
                      className="text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-200"
                      style={{ border: "1px solid rgba(35,31,26,0.3)", color: "var(--graphite)", backgroundColor: "transparent" }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = "var(--graphite)"; (e.target as HTMLElement).style.color = "var(--cream)"; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = "transparent"; (e.target as HTMLElement).style.color = "var(--graphite)"; }}
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-20" style={{ borderTop: "1px solid rgba(200,184,168,0.3)" }}>
              <h3 className="font-display text-3xl font-light mb-12" style={{ color: "var(--graphite)" }}>Как проходят встречи</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", text: "Выбираете встречу и записываетесь" },
                  { step: "02", text: "Получаете ссылку на встречу в личный кабинет" },
                  { step: "03", text: "Подключаетесь в любом браузере без скачивания" },
                  { step: "04", text: "После встречи остаётся запись и материалы" },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col gap-4">
                    <span className="font-display text-4xl" style={{ color: "rgba(200,184,168,0.5)" }}>{s.step}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--warm-mid)" }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== COMMUNITY ==================== */}
        {active === "community" && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--taupe)" }}>Наши участницы</p>
            <h2 className="font-display text-5xl md:text-7xl font-light mb-16 animate-fade-up opacity-0-init delay-100" style={{ color: "var(--graphite)" }}>
              Сообщество<br /><em>живых людей</em>
            </h2>

            <div className="grid md:grid-cols-3 gap-px animate-fade-up opacity-0-init delay-200" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
              {MEMBERS.map((m) => (
                <div key={m.name} className="p-8 flex items-start gap-5" style={{ backgroundColor: "var(--cream)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
                    <span className="font-display text-xl" style={{ color: "var(--warm-mid)" }}>{m.initial}</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: "var(--graphite)" }}>{m.name}</p>
                    <p className="text-sm" style={{ color: "var(--warm-mid)" }}>{m.role}</p>
                    <p className="text-xs mt-1 tracking-wider" style={{ color: "var(--taupe)" }}>{m.city}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pl-10 animate-fade-up opacity-0-init delay-300" style={{ borderLeft: "2px solid var(--taupe)" }}>
              <p className="font-display text-2xl md:text-3xl font-light italic leading-relaxed" style={{ color: "var(--graphite)" }}>
                "Клуб — это место, где меня понимают. Где не надо ничего объяснять. Здесь просто хорошо."
              </p>
              <p className="mt-5 text-sm tracking-wider" style={{ color: "var(--taupe)" }}>— Елена В., психолог, участница с первого дня</p>
            </div>

            <div className="mt-20 text-center">
              <p className="mb-6" style={{ color: "var(--warm-mid)" }}>Хотите стать частью сообщества?</p>
              <button
                onClick={() => navigate("subscribe")}
                className="px-12 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
                style={{ backgroundColor: "var(--graphite)", color: "var(--cream)" }}
              >
                Вступить в клуб
              </button>
            </div>
          </div>
        )}

        {/* ==================== SUBSCRIBE ==================== */}
        {active === "subscribe" && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--taupe)" }}>Тарифы</p>
            <h2 className="font-display text-5xl md:text-7xl font-light mb-4 animate-fade-up opacity-0-init delay-100" style={{ color: "var(--graphite)" }}>
              Подписка
            </h2>
            <p className="mb-16 animate-fade-up opacity-0-init delay-200" style={{ color: "var(--warm-mid)" }}>Выберите подходящий формат участия</p>

            <div className="grid md:grid-cols-3 gap-px animate-fade-up opacity-0-init delay-300" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="p-10 flex flex-col"
                  style={{ backgroundColor: plan.featured ? "var(--graphite)" : "var(--cream)" }}
                >
                  {plan.featured && (
                    <span className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--taupe)" }}>Популярный</span>
                  )}
                  <p className="font-display text-2xl font-light mb-1" style={{ color: plan.featured ? "var(--cream)" : "var(--graphite)" }}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-display text-5xl font-light" style={{ color: plan.featured ? "var(--cream)" : "var(--graphite)" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: plan.featured ? "var(--taupe)" : "var(--warm-mid)" }}>₽ / {plan.period}</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-10">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Icon name="Check" size={14} className="mt-0.5 flex-shrink-0" style={{ color: plan.featured ? "var(--taupe)" : "var(--warm-mid)" }} />
                        <span className="text-sm leading-snug" style={{ color: plan.featured ? "rgba(247,244,240,0.8)" : "var(--warm-mid)" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full py-3.5 text-sm tracking-widest uppercase transition-all duration-200"
                    style={plan.featured
                      ? { backgroundColor: "var(--cream)", color: "var(--graphite)" }
                      : { border: "1px solid rgba(35,31,26,0.3)", color: "var(--graphite)", backgroundColor: "transparent" }
                    }
                  >
                    Выбрать
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm" style={{ color: "var(--taupe)" }}>
              Есть вопросы? Напишите нам — ответим в течение часа.
            </p>
          </div>
        )}

        {/* ==================== CABINET ==================== */}
        {active === "cabinet" && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--taupe)" }}>Личный кабинет</p>
            <h2 className="font-display text-5xl font-light mb-16 animate-fade-up opacity-0-init delay-100" style={{ color: "var(--graphite)" }}>
              Добро пожаловать
            </h2>

            <div className="max-w-md animate-fade-up opacity-0-init delay-200">
              <div className="p-10" style={{ border: "1px solid rgba(200,184,168,0.4)" }}>
                <p className="font-display text-2xl font-light mb-8" style={{ color: "var(--graphite)" }}>Войти в клуб</p>

                <div className="space-y-5">
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--taupe)" }}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(200,184,168,0.5)",
                        backgroundColor: "transparent",
                        color: "var(--graphite)"
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--taupe)" }}>Пароль</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(200,184,168,0.5)",
                        backgroundColor: "transparent",
                        color: "var(--graphite)"
                      }}
                    />
                  </div>
                  <button
                    className="w-full py-3.5 text-sm tracking-widest uppercase transition-colors duration-200"
                    style={{ backgroundColor: "var(--graphite)", color: "var(--cream)" }}
                  >
                    Войти
                  </button>
                </div>

                <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid rgba(200,184,168,0.25)" }}>
                  <p className="text-sm mb-3" style={{ color: "var(--warm-mid)" }}>Ещё не в клубе?</p>
                  <button
                    onClick={() => navigate("subscribe")}
                    className="text-sm tracking-widest uppercase link-elegant"
                    style={{ color: "var(--graphite)" }}
                  >
                    Вступить →
                  </button>
                </div>
              </div>

              <div className="mt-12 space-y-5">
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--taupe)" }}>В личном кабинете</p>
                {[
                  { icon: "Video", text: "Записи всех встреч и мастер-классов" },
                  { icon: "Calendar", text: "Ваше расписание встреч" },
                  { icon: "Users", text: "Доступ в закрытый чат" },
                  { icon: "FileText", text: "Материалы и конспекты" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-4">
                    <Icon name={f.icon} size={16} className="flex-shrink-0" style={{ color: "var(--taupe)" }} />
                    <span className="text-sm" style={{ color: "var(--warm-mid)" }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid rgba(200,184,168,0.35)" }} className="mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-xl font-light tracking-widest uppercase" style={{ color: "var(--graphite)" }}>Клуб</p>
          <div className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-xs tracking-widest uppercase transition-colors link-elegant"
                style={{ color: "var(--warm-mid)" }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs" style={{ color: "var(--taupe)" }}>© 2026 Клуб</p>
        </div>
      </footer>
    </div>
  );
}