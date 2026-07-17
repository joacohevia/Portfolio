import { useTranslation } from 'react-i18next';

const grupos = [
  {
    labelKey: 'tecnologias.groups.backend',
    techs: [
      { nombre: 'Java', color: '#f89820' },
      { nombre: 'Spring Boot', color: '#6db33f' },
      { nombre: 'PHP', color: '#777bb4' },
      { nombre: 'SQL', color: '#cc2927' },
      { nombre: 'PostgreSQL', color: '#336791' },
      { nombre: 'MySQL', color: '#4479a1' },
      { nombre: 'Microservicios', color: '#00d4aa' },
      { nombre: 'Docker', color: '#2496ed' },
      { nombre: 'n8n', color: '#336791'},
    ],
  },
  {
    labelKey: 'tecnologias.groups.frontend',
    techs: [
      { nombre: 'Html', color: '#e34f26' },
      { nombre: 'Css', color: '#1572b6' },
      { nombre: 'JavaScript', color: '#f7df1e' },
      { nombre: 'TypeScript', color: '#3178c6' },
      { nombre: 'React', color: '#61dafb' },
      { nombre: 'Angular', color: '#dd0031' },
    ],
  },
  {
    labelKey: 'tecnologias.groups.tools',
    techs: [
      { nombre: 'Postman', color: '#ff6c37' },
      { nombre: 'Swagger', color: '#85ea2d' },
      { nombre: 'Figma', color: '#f24e1e' },
      { nombre: 'Git', color: '#f05032' },
      { nombre: 'Scrum', color: '#00d4aa' },
    ],
  },
];

export default function Tecnologias() {
  const { t } = useTranslation();

  return (
    <section id="tecnologias" className="section">
      <div className="section-label">{t('tecnologias.label')}</div>
      <h2 className="section-title">{t('tecnologias.title')}</h2>

      {grupos.map(grupo => (
        <div key={grupo.labelKey} className="tech-group">
          <div className="tech-group-label">{t(grupo.labelKey)}</div>
          <div className="tech-pills">
            {grupo.techs.map(tech => (
              <div key={tech.nombre} className="tech-pill">
                <span className="dot" style={{ background: tech.color }} />
                {tech.nombre}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
