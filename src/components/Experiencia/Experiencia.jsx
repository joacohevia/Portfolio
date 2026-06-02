const experiencia = [
  {
    id: 1,
    fecha: '2022 – Actualidad',
    titulo: 'Trabajos independientes',
    lugar: 'Freelance',
    descripcion: 'Realizo trabajos y servicios independientes para distintos clientes, tanto en áreas técnicas e IT como en tareas operativas vinculadas a jardinería, construcción, electricidad, carpintería.'
  },
  {
    id: 2,
    fecha: 'Mar 2021 – Mar 2022.',
    titulo: 'Empleado de jardinería y mantenimiento.',
    lugar: 'Servicios particulares',
    descripcion: 'Adquirí experiencia en mantenimiento de maquinaria y ejecución de tareas de jardinería y poda para distintos contratistas. Desarrollé autonomía, responsabilidad y capacidad de organización en el trabajo diario, desempeñándome en entornos dinámicos y orientados al cumplimiento de objetivos.'
  },
  {
    id: 3,
    fecha: 'Abr 2019 - Dic 2020 ',
    titulo: 'Soldado voluntario',
    lugar: 'Ejercito Argentino-Primera Brigada Blindada',
    descripcion: 'Desarrollé habilidades de disciplina, trabajo en equipo, organización y resolucion de problemas, cumpliendo responsabilidades operativas y adaptándome a distintos desafios con compromiso y responsabilidad.',
  }
]; 

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="section-label">05 — experiencia</div>
      <h2 className="section-title">Experiencia laboral</h2>

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
