import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cvFile from '../../assets/CV_Joaquin_Hevia_Desarrollador_Full_Stack.pdf';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { href: '#sobre-mi', label: t('nav.sobreMi') },
    { href: '#proyectos', label: t('nav.proyectos') },
    { href: '#tecnologias', label: t('nav.tecnologias') },
    { href: '#formacion', label: t('nav.formacion') },
    { href: '#experiencia', label: t('nav.experiencia') },
    { href: '#contacto', label: t('nav.contacto') },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = 1;
    const extraOffset = 5;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionEls = ['#sobre-mi', '#proyectos', '#tecnologias', '#formacion', '#experiencia', '#contacto']
      .map(s => document.querySelector(s));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionEls.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const currentLang = i18n.language;
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  const langLabel = currentLang === 'es' ? 'EN' : 'ES';

  return (
    <nav className="nav">
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={cvFile}
            download="CV_Joaquin_Hevia_Desarrollador_Full_Stack"
            className="nav-cv-btn"
            onClick={() => setMenuOpen(false)}>
            {t('nav.cv')}
          </a>
        </li>
        <li>
          <button
            className="lang-switch"
            onClick={() => i18n.changeLanguage(nextLang)}
            aria-label={`Switch to ${nextLang === 'en' ? 'English' : 'Spanish'}`}
          >
            {langLabel}
          </button>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
