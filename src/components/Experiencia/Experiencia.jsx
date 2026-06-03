import { useTranslation } from 'react-i18next';

export default function Experiencia() {
  const { t } = useTranslation();
  const experiencia = t('experiencia.items', { returnObjects: true });

  return (
    <section id="experiencia" className="section">
      <div className="section-label">{t('experiencia.label')}</div>
      <h2 className="section-title">{t('experiencia.title')}</h2>

      <div className="timeline">
        {experiencia.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.fecha}</div>
            <div className="timeline-title">{item.titulo}</div>
            <div className="timeline-place">{item.lugar}</div>
            <div className="timeline-place">{item.descripcion}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
