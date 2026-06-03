import { useTranslation } from 'react-i18next';

export default function Formacion() {
  const { t } = useTranslation();
  const formacion = t('formacion.items', { returnObjects: true });

  return (
    <section id="formacion" className="section">
      <div className="section-label">{t('formacion.label')}</div>
      <h2 className="section-title">{t('formacion.title')}</h2>

      <div className="timeline">
        {formacion.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.fecha}</div>
            <div className="timeline-title">{item.titulo}</div>
            <div className="timeline-place">{item.lugar}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
