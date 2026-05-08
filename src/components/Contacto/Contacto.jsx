const contactos = [
  {
    id: 'email',
    icon: '@',
    label: 'EMAIL',
    value: 'joaco.r.hevia@gmail.com',
    href: 'mailto:joaco.r.hevia@gmail.com',
  },
  {
    id: 'linkedin',
    icon: 'in',
    label: 'LINKEDIN',
    value: 'Joaquin Hevia',
    href: 'https://www.linkedin.com/in/joaquin-hevia3704/',
  },
  {
    id: 'github',
    icon: '</>',
    label: 'GITHUB',
    value: 'Joaco Hevia',
    href: 'https://github.com/joacohevia',
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="section-label">05 — contacto</div>
      <h2 className="section-title">Hablemos</h2>

      <div className="contact-grid">
        {contactos.map(item => (
          <a
            key={item.id}
            href={item.href}
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{item.icon}</div>
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
