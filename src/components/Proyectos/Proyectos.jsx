import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FotoChatbot from '../../assets/Chatbot.png';
import FotoJava from '../../assets/ChatIA 2025-11-24 171554.png';
import FotoAngular from '../../assets/FrenteAngular.jpg';
import FotoPhp from '../../assets/PostSwagAPI.png';

const LINKEDIN_PROJECTS = 'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/';
const GITHUB_URL_BOT = 'https://github.com/joacohevia/CanchaBot';

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const BUTTON_ICONS = {
  linkedin: LinkedInIcon,
  code: GithubIcon,
  demo: ExternalLinkIcon,
};

export default function Proyectos() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const PROJECTS = [
    {
      id: 1,
      name: t('proyectos.1.name'),
      tag: 'Backend',
      tagColor: '#8b5cf6',
      desc: t('proyectos.1.desc'),
      image: FotoJava,
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JPA'],
      buttons: [
        { type: 'linkedin', label: t('proyectos.verLinkedIn'), url: LINKEDIN_PROJECTS },
        { type: 'code', label: t('proyectos.verCodigo'), url: 'https://github.com/joacohevia/Proyecto-MonopatinElectrico' },
      ],
    },
    {
      id: 2,
      name: t('proyectos.2.name'),
      tag: 'Backend',
      tagColor: '#8b5cf6',
      desc: t('proyectos.2.desc'),
      image: FotoPhp,
      tech: ['PHP', 'MySQL', 'JWT', 'Postman', 'Docker', 'Swagger'],
      buttons: [
        { type: 'linkedin', label: t('proyectos.verLinkedIn'), url: LINKEDIN_PROJECTS },
        { type: 'code', label: t('proyectos.verCodigo'), url: 'https://github.com/joacohevia/Api-tienda' },
      ],
    },
    {
      id: 3,
      name: t('proyectos.3.name'),
      tag: 'Frontend',
      tagColor: '#22d3ee',
      desc: t('proyectos.3.desc'),
      image: FotoAngular,
      tech: ['Angular', 'TypeScript', 'API REST', 'MySQL', 'Railway', 'Vercel', 'Responsive Design'],
      buttons: [
        { type: 'demo', label: t('proyectos.demoWeb'), url: 'https://tienda-front-three.vercel.app/productos' },
        { type: 'linkedin', label: t('proyectos.verLinkedIn'), url: LINKEDIN_PROJECTS },
        { type: 'code', label: t('proyectos.verCodigo'), url: 'https://github.com/joacohevia/tiendaFront' },
      ],
    },
    {
      id: 4,
      name: t('proyectos.4.name'),
      tag: 'IA / Backend',
      tagColor: '#22d3ee',
      desc: t('proyectos.4.desc'),
      image: FotoChatbot,
      tech: ['Java 17', 'Spring Boot', 'React', 'Docker', 'DeepSeek API', 'Supabase'],
      buttons: [
        { type: 'demo', label: t('proyectos.demoWeb'), url: 'https://chat-bot-front-five.vercel.app/' },
        { type: 'demo', label: t('proyectos.botTelegram'), url: 'https://t.me/Cancha_futbol_sint_bot' },
        { type: 'linkedin', label: t('proyectos.verLinkedIn'), url: LINKEDIN_PROJECTS },
        { type: 'code', label: t('proyectos.verCodigo'), url: GITHUB_URL_BOT },
      ],
    },
  ];

  const handleNext = () => setActive(a => (a + 1) % PROJECTS.length);
  const handlePrev = () => setActive(a => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const openLinkedIn = () => window.open(LINKEDIN_PROJECTS, '_blank', 'noopener,noreferrer');

  const proj = PROJECTS[active];

  return (
    <section id="proyectos" className="projects-section reveal">
      <div className="projects-header">
        <div className="projects-title-group">
          <h2 className="section-title">{t('proyectos.title')}</h2>
        </div>
        <div className="project-controls">
          <button onClick={handlePrev} className="project-control-btn" aria-label={t('proyectos.prev')}>‹</button>
          <button onClick={handleNext} className="project-control-btn" aria-label={t('proyectos.next')}>›</button>
        </div>
      </div>

      <div
        key={active}
        className="project-card fade-up"
        onClick={openLinkedIn}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLinkedIn(); } }}
      >
        <div className="project-card-inner">
          <div className="project-visual">
            {proj.image && <img src={proj.image} alt={proj.name} className="project-image" />}
            <p className="project-project-info-text">{active + 1} / {PROJECTS.length}</p>
          </div>
          <div className="project-project-info">
            <span className="project-tag" style={{background: `${proj.tagColor}18`, borderColor: `${proj.tagColor}35`, color: proj.tagColor}}>{proj.tag}</span>
            <h3 className="project-name">{proj.name}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-tech">
              {proj.tech.map(t => <span key={t} className="project-tech-tag">{t}</span>)}
            </div>
            <div className="project-actions">
              {proj.buttons.map((btn, i) => {
                const Icon = BUTTON_ICONS[btn.type] || ExternalLinkIcon;
                return (
                  <a
                    key={i}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-btn ${btn.type === 'demo' ? 'project-btn-demo' : 'project-btn-code'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon />
                    {btn.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="project-dots">
        {PROJECTS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`project-dot ${i === active ? 'active' : ''}`} aria-label={`${t('proyectos.project')} ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
