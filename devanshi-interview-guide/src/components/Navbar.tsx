import { navItems } from '../data/content';

type Props = {
  active: string;
  onNavigate: (id: string) => void;
  darkMode: boolean;
  onToggleDark: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function Navbar({ active, onNavigate, darkMode, onToggleDark, menuOpen, onToggleMenu }: Props) {
  return (
    <header className="topbar">
      <div className="brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
        <span className="brand-mark">DP</span>
        <span><strong>Interview Guide</strong><small>Resume to confident answers</small></span>
      </div>
      <button className="menu-button" onClick={onToggleMenu} aria-label="Toggle navigation">☰</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navItems.map((item) => (
          <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
      <button className="theme-button" onClick={onToggleDark} aria-label="Toggle theme">
        {darkMode ? '☀︎' : '☾'}
      </button>
    </header>
  );
}
