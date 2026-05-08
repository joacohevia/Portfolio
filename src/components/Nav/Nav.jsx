import { useEffect, useState } from 'react';
import cvFile from '../../assets/CV-Backend.pdf';
const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  //funcion scroll
    const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = 1;
    const extraOffset = 5;//mas abajo le resto
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={(e) => handleNavClick(e,link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
            <a href={cvFile}
            download="CV-Backend.pdf"
            className="nav-cv-btn"
            onClick={() => setMenuOpen(false)}>
             CV ↓  
            </a>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
