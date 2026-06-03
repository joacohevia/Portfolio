import { useTranslation } from 'react-i18next';

const contactUrls = {
  email: 'mailto:joaco.r.hevia@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joaquin-hevia3704/',
  github: 'https://github.com/joacohevia',
};

export default function Contacto() {
  const { t } = useTranslation();
  const contactos = t('contacto.items', { returnObjects: true });

  return (
    <section id="contacto" className="section">
      <div className="section-label">{t('contacto.label')}</div>
      <h2 className="section-title">{t('contacto.title')}</h2>

      <div className="contact-grid">
        {contactos.map(item => (
          <a
            key={item.id}
            href={contactUrls[item.id]}
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{item.id === 'email' ? '@' : item.id === 'linkedin' ? 'in' : '</>'}</div>
            <div>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
