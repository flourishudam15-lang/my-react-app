import { useEffect, useState } from 'react';

const links = [
  { name: 'work', href: '#work' },
  { name: 'about', href: '#about' },
  { name: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <span className="mark">&lt;/&gt;</span> flourish
      </a>

      <nav className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.name}</a>
        ))}
      </nav>

      <span className="nav-status"><span className="dot" /> available</span>

      <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>

      {open && (
        <div className="nav-menu" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.name}</a>
          ))}
        </div>
      )}
    </header>
  );
}
