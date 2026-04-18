import { useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { ChatMessage, MEMBERS } from "./data";

interface Props {
  messages: ChatMessage[];
  chatInput: string;
  setChatInput: (val: string) => void;
  sendMessage: () => void;
}

export default function ChatSection({ messages, chatInput, setChatInput, sendMessage }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [messages]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-10 animate-fade-up opacity-0-init">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--taupe)" }}>Закрытый</p>
          <h2 className="font-display text-5xl font-light" style={{ color: "var(--graphite)" }}>
            Чат <em>участниц</em>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs tracking-wider uppercase" style={{ color: "var(--taupe)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          {MEMBERS.length} онлайн
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_260px] gap-px" style={{ backgroundColor: "rgba(200,184,168,0.2)" }}>
        {/* Messages area */}
        <div className="flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
          <div
            className="flex-1 overflow-y-auto p-6 space-y-6 animate-fade-up opacity-0-init delay-100"
            style={{ minHeight: "480px", maxHeight: "520px" }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.mine ? "flex-row-reverse" : ""}`}
              >
                {!msg.mine && (
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(200,184,168,0.25)" }}
                  >
                    <span className="font-display text-base" style={{ color: "var(--warm-mid)" }}>{msg.initial}</span>
                  </div>
                )}
                <div className={`flex flex-col max-w-[75%] ${msg.mine ? "items-end" : ""}`}>
                  {!msg.mine && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-medium" style={{ color: "var(--graphite)" }}>{msg.author}</span>
                      <span className="text-xs" style={{ color: "var(--taupe)" }}>{msg.role}</span>
                    </div>
                  )}
                  <div
                    className="px-4 py-3 text-sm leading-relaxed"
                    style={{
                      backgroundColor: msg.mine ? "var(--graphite)" : "rgba(200,184,168,0.15)",
                      color: msg.mine ? "var(--cream)" : "var(--graphite)",
                      borderRadius: msg.mine ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    }}
                  >
                    {msg.text}
                  </div>
                  <span className="text-xs mt-1" style={{ color: "var(--taupe)" }}>{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-3 px-6 py-4 animate-fade-up opacity-0-init delay-200"
            style={{ borderTop: "1px solid rgba(200,184,168,0.3)" }}
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Написать в чат..."
              className="flex-1 bg-transparent text-sm focus:outline-none"
              style={{ color: "var(--graphite)" }}
            />
            <button
              onClick={sendMessage}
              className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: "var(--graphite)", color: "var(--cream)", borderRadius: "50%" }}
            >
              <Icon name="ArrowUp" size={16} />
            </button>
          </div>
        </div>

        {/* Participants sidebar */}
        <div className="p-6" style={{ backgroundColor: "rgba(247,244,240,0.7)" }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--taupe)" }}>Участницы</p>
          <div className="space-y-4">
            {MEMBERS.map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(200,184,168,0.25)" }}
                  >
                    <span className="font-display text-sm" style={{ color: "var(--warm-mid)" }}>{m.initial}</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2" style={{ borderColor: "rgba(247,244,240,0.7)" }} />
                </div>
                <div>
                  <p className="text-xs font-medium leading-none" style={{ color: "var(--graphite)" }}>{m.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--taupe)" }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(200,184,168,0.3)" }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--taupe)" }}>Темы чата</p>
            {["Общий", "Встречи", "Бизнес", "Личное"].map((tag) => (
              <button
                key={tag}
                className="block w-full text-left text-xs px-3 py-2 mb-1 transition-colors duration-150"
                style={{ color: tag === "Общий" ? "var(--graphite)" : "var(--warm-mid)", backgroundColor: tag === "Общий" ? "rgba(200,184,168,0.2)" : "transparent" }}
              >
                # {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
