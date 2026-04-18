import { useState } from "react";
import { Section, ChatMessage, INITIAL_MESSAGES, NAV_ITEMS } from "./club/data";
import Header from "./club/Header";
import HomeSections from "./club/HomeSections";
import ChatSection from "./club/ChatSection";

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [chatInput, setChatInput] = useState("");

  const sendMessage = () => {
    const text = chatInput.trim();
    if (!text) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, author: "Вы", initial: "В", role: "Участница", text, time, mine: true },
    ]);
    setChatInput("");
  };

  const navigate = (section: Section) => {
    setActive(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "var(--cream)" }}>
      <Header
        active={active}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
      />

      <main className="pt-16">
        <HomeSections active={active} navigate={navigate} />

        {active === "chat" && (
          <ChatSection
            messages={messages}
            chatInput={chatInput}
            setChatInput={setChatInput}
            sendMessage={sendMessage}
          />
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
