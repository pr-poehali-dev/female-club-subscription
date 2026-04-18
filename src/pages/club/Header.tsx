import Icon from "@/components/ui/icon";
import { NAV_ITEMS, Section } from "./data";

interface HeaderProps {
  active: Section;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: (section: Section) => void;
}

export default function Header({ active, menuOpen, setMenuOpen, navigate }: HeaderProps) {
  return (
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
  );
}
