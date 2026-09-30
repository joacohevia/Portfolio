import { useTranslation } from 'react-i18next';

const LINKEDIN_EXPERIENCE_URL = 'https://www.linkedin.com/in/joaquin-hevia3704/details/experience/';

export default function Experiencia() {
  const { t } = useTranslation();
  const experiencia = t('experiencia.items', { returnObjects: true });

  return (
    <section id="experiencia" className="experience-section">
      <h2 className="section-title">{t('experiencia.title')}</h2>
      <div className="experience-list">
        {experiencia.map((exp, i) => (
          <a
            key={i}
            href={LINKEDIN_EXPERIENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card"
          >
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <ul className="exp-items">
              {exp.details.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
