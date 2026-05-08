import Foto1 from '../../assets/ChatIA 2025-11-24 171554.png';
import Foto3 from '../../assets/FrenteAngular.jpg';
import Foto2 from '../../assets/PostSwagAPI.png';
import ProjectCard from './ProjectCard';
// Editá este array para agregar tus proyectos reales
const proyectos = [
  {
    id: 1,
    title: 'API realizada con Java',
    description: 'Este proyecto colaborativo consiste en el desarrollo de una API orientada a la gestión de un sistema de monopatines eléctricos, diseñada bajo una arquitectura de microservicios. El objetivo principal es ofrecer una solución escalable y modular que permita administrar de forma eficiente los distintos componentes del sistema, facilitando su mantenimiento y evolución.',
    tags: ['PostgreSQL','Docker','JPA','Spring Boot'],
    image: Foto1,
    link: 'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
    deploy:'' 
  },
  {
    id: 2,
    title: 'API REST Tienda de Indumentaria',
    description: 'Desarrollo de una API REST en PHP orientada a la gestión de productos para una tienda de indumentaria.' + 
    'La aplicación está estructurada bajo el patrón de arquitectura MVC (Model-View-Controller), permitiendo una clara separación de responsabilidades entre la lógica de negocio, el acceso a datos y la gestión de rutas/controladores.',
    tags: ['MySQL', 'JWT', 'Postman', 'PHP','Docker','Swagger'],
    image: Foto2,
    link: 'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
    deploy: ''
  },
  {
    id: 3,
    title: 'Frontend de tienda de ropa con Angular',
    description: 'Desarrollo de una aplicación de indumentaria donde los clientes pueden registrarse, elegir productos por color y talle, ver el total y concretar el pedido por WhatsApp.',
    tags: ['Angular', 'TypeScript', 'API REST', 'MySQL', 'Railway', 'Vercel', 'Responsive Design.'],
    image: Foto3,
    link: 'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
    deploy: 'https://tienda-front-three.vercel.app/productos'
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="section-label">02 — proyectos</div>
      <h2 className="section-title">Lo que construí</h2>

      <div className="projects-grid">
        {proyectos.map(proyecto => (
          <ProjectCard key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </section>
  );
}
