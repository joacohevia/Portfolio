const formacion = [
  {
    id: 1,
    fecha: '2023 — en curso',
    titulo: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas(TUDAI)',
    lugar: 'Universidad Nacional del Centro de la Provincia de Buenos Aires(UNICEN)',
  },
];

export default function Formacion() {
  return (
    <section id="formacion" className="section">
      <div className="section-label">04 — formación</div>
      <h2 className="section-title">Estudios y certificaciones</h2>

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
