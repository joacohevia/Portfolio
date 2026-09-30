import { useTranslation } from 'react-i18next';

export default function Formacion() {
  const { t } = useTranslation();
  const education = t('formacion.education', { returnObjects: true });
  const certs = t('formacion.certs', { returnObjects: true });

  return (
    <section id="formacion" className="formacion-section">
      <div className="formacion-grid">
        <div className="formacion-education">
          <h3 className="formacion-title">
            {t('formacion.educacionTitle')}
          </h3>
          <div className="timeline">
            {education.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <p className="timeline-date">
                  {edu.year} <span>· {edu.note}</span>
                </p>
                <h4 className="timeline-title">{edu.title}</h4>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-desc">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="formacion-certs">
          <h3 className="formacion-title">
            {t('formacion.certsTitle')}
          </h3>
          {certs.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="cert-content">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-org">{cert.org}</div>
                <div className="cert-desc">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
