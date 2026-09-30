import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FotoChatbot from '../../assets/Chatbot.png';
import FotoJava from '../../assets/ChatIA 2025-11-24 171554.png';
import FotoAngular from '../../assets/FrenteAngular.jpg';
import FotoPhp from '../../assets/PostSwagAPI.png';

const LINKEDIN_PROJECTS = 'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/';

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

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
      ],
    },
  ];

  const handleNext = () => setActive(a => (a + 1) % PROJECTS.length);
  const handlePrev = () => setActive(a => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const openLinkedIn = () => window.open(LINKEDIN_PROJECTS, '_blank', 'noopener,noreferrer');

  const proj = PROJECTS[active];

  return (
    <section id="proyectos" className="projects-section">
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
              {proj.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-btn ${btn.type === 'demo' ? 'project-btn-demo' : 'project-btn-code'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {btn.type === 'demo' ? <ExternalLinkIcon /> : <LinkedInIcon />}
                  {btn.label}
                </a>
              ))}
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
