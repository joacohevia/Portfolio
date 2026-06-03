import { useTranslation } from 'react-i18next';
import Foto5 from '../../assets/Chatbot.png';
import Foto1 from '../../assets/ChatIA 2025-11-24 171554.png';
import Foto3 from '../../assets/FrenteAngular.jpg';
import Foto4 from '../../assets/FrenteHerramientas.png';
import Foto2 from '../../assets/PostSwagAPI.png';
import ProjectCard from './ProjectCard';

const projectImages = {
  1: Foto1,
  2: Foto2,
  3: Foto3,
  4: Foto5,
  5: Foto4,
};

const projectLinks = [
  'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
  'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
  'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
  'https://www.linkedin.com/in/joaquin-hevia3704/details/projects/',
  'En desarrollo',
];

/*
  Deploys: cada proyecto puede tener 0, 1 o N botones de deploy.
  Cada entry es { url, labelKey } donde labelKey apunta a projectCard.deployLabels.* en los JSON de traducción.
  Si el array está vacío, no se renderiza ningún botón.
*/
const projectDeploys = [
  [], // 1. API Java — sin deploy público
  [], // 2. API PHP — sin deploy público
  [
    { url: 'https://tienda-front-three.vercel.app/productos', labelKey: 'projectCard.deployLabels.webDemo' }
  ], // 3. Tienda Angular — demo web en Vercel
  [
    { url: 'https://t.me/Cancha_futbol_sint_bot', labelKey: 'projectCard.deployLabels.telegram' },
    { url: 'https://chat-bot-front-five.vercel.app', labelKey: 'projectCard.deployLabels.webDemo' }
  ], // 4. ChatBot IA — bot de Telegram + demo web en Vercel
  [], // 5. Herramientas-Tandil — en desarrollo, sin deploy aún
];

const projectTags = [
  ['PostgreSQL', 'Docker', 'JPA', 'Spring Boot'],
  ['MySQL', 'JWT', 'Postman', 'PHP', 'Docker', 'Swagger'],
  ['Angular', 'TypeScript', 'API REST', 'MySQL', 'Railway', 'Vercel', 'Responsive Design.'],
  ['Java 17', 'Spring Boot', 'React', 'Docker', 'DeepSeek API', 'Supabase'],
  ['React', 'Postgresql', 'Vercel', 'Responsive Design.'],
];

export default function Proyectos() {
  const { t } = useTranslation();
  const proyectos = t('proyectos.items', { returnObjects: true });

  return (
    <section id="proyectos" className="section">
      <div className="section-label">{t('proyectos.label')}</div>
      <h2 className="section-title">{t('proyectos.title')}</h2>

      <div className="projects-grid">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={proyecto.id}
            title={proyecto.title}
            description={proyecto.description}
            tags={projectTags[index]}
            image={projectImages[proyecto.id]}
            link={projectLinks[index]}
            deploys={projectDeploys[index]}
          />
        ))}
      </div>
    </section>
  );
}
