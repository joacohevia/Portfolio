import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cvFileEs from '../../assets/CV_Joaquin_Hevia_Desarrollador_Full_Stack.pdf';
import cvFileEn from '../../assets/CV_Joaquin_Hevia_Desarrollador_Full_Stack_english.pdf';

const SECTION_IDS = ['sobre-mi', 'experiencia', 'habilidades', 'proyectos', 'formacion', 'contacto'];

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { href: '#sobre-mi', label: t('nav.sobreMi') },
    { href: '#experiencia', label: t('nav.experiencia') },
    { href: '#habilidades', label: t('nav.habilidades') },
    { href: '#proyectos', label: t('nav.proyectos') },
    { href: '#formacion', label: t('nav.formacion') },
    { href: '#contacto', label: t('nav.contacto') },
  ];

  useEffect(() => {
    const navEl = document.querySelector('.nav');

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const navHeight = navEl ? navEl.offsetHeight : 0;
      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= navHeight + 4) {
          current = '#' + id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const navEl = document.querySelector('.nav');
    const offset = navEl ? navEl.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const currentLang = i18n.language;
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  const langLabel = currentLang === 'es' ? 'EN' : 'ES';

  const isEn = currentLang?.startsWith('en');
  const cvFile = isEn ? cvFileEn : cvFileEs;
  const cvName = isEn ? 'CV_Joaquin_Hevia_Full_Stack_Developer' : 'CV_Joaquin_Hevia_Desarrollador_Full_Stack';

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#inicio" className="nav-logo gradient-text-blue" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          JH.
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-lang-item">
            <button
              className="lang-switch"
              onClick={() => { i18n.changeLanguage(nextLang); setMenuOpen(false); }}
              aria-label={t('nav.switchLang')}
            >
              {langLabel}
            </button>
          </li>
        </ul>
        <div className={`nav-actions ${menuOpen ? 'mobile-open' : ''}`}>
          <a
            href={cvFile}
            download={cvName}
            className="nav-cv-btn"
          >
            {t('nav.cv')}
          </a>
          <button
            className="lang-switch lang-switch-desktop"
            onClick={() => i18n.changeLanguage(nextLang)}
            aria-label={t('nav.switchLang')}
          >
            {langLabel}
          </button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
