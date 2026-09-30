import { useTranslation } from 'react-i18next';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SI = 'https://cdn.simpleicons.org';
const MDI = 'https://cdn.jsdelivr.net/npm/@mdi/svg@latest/svg';

const SKILL_GROUPS = [
  {
    titleKey: 'habilidades.groups.backend',
    skills: [
      { name: 'Java', icon: `${DI}/java/java-original.svg` },
      { name: 'Spring Boot', icon: `${DI}/spring/spring-original.svg` },
      { name: 'PHP', icon: `${DI}/php/php-original.svg` },
      { name: 'SQL', icon: `${DI}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: 'PostgreSQL', icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: 'MySQL', icon: `${DI}/mysql/mysql-original.svg` },
      { name: 'Microservicios', icon: `${DI}/kubernetes/kubernetes-original.svg` },
      { name: 'Docker', icon: `${DI}/docker/docker-original.svg` },
      { name: 'TypeScript', icon: `${DI}/typescript/typescript-original.svg` },
      { name: 'NestJS', icon: `${DI}/nestjs/nestjs-original.svg` },
    ],
  },
  {
    titleKey: 'habilidades.groups.frontend',
    skills: [
      { name: 'React', icon: `${DI}/react/react-original.svg` },
      { name: 'Next.js', icon: `${DI}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind CSS', icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Angular', icon: `${DI}/angular/angular-original.svg` },
      { name: 'HTML5', icon: `${DI}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${DI}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DI}/javascript/javascript-original.svg` },
      { name: 'Figma', icon: `${DI}/figma/figma-original.svg` },
      { name: 'Google Stich', icon: `${DI}/google/google-original.svg` },
    ],
  },
  {
    titleKey: 'habilidades.groups.tools',
    skills: [
      { name: 'Git', icon: `${DI}/git/git-original.svg` },
      { name: 'Postman', icon: `${DI}/postman/postman-original.svg` },
      { name: 'Swagger', icon: `${DI}/swagger/swagger-original.svg` },
      { name: 'GitHub', icon: `${DI}/github/github-original.svg` },
      { name: 'VS Code', icon: `${DI}/vscode/vscode-original.svg` },
      { name: 'JUnit', icon: `${DI}/junit/junit-original.svg` },
      { name: 'Cursor', icon: `${SI}/cursor`, invert: true },
      { name: 'Scrum', icon: `${MDI}/sync.svg`, invert: true },
    ],
  },
  {
    titleKey: 'habilidades.groups.ia',
    skills: [
      { name: 'LLMs', icon: `${MDI}/robot.svg`, invert: true },
      { name: 'OpenAI', icon: `${DI}/openai/openai-original.svg` },
      { name: 'RAG', icon: `${MDI}/robot-outline.svg`, invert: true },
      { name: 'DeepSeek', icon: `${SI}/deepseek` },
      { name: 'Prompt Engineering', icon: `${MDI}/robot-happy.svg`, invert: true },
      { name: 'MCP', icon: `${MDI}/robot-love.svg`, invert: true },
      { name: 'AI Workflows', icon: `${MDI}/robot-excited.svg`, invert: true },
      { name: 'n8n', icon: `${SI}/n8n` },
    ],
  },
];

export default function Habilidades() {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-intro">
        <h2 className="skills-title">
          {t('habilidades.title')}
        </h2>
        <p className="skills-subtitle">
          {t('habilidades.description')}
        </p>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="skill-group">
            <div className="skill-group-header">
              <div className="dot" />
              <h3 className="skill-group-title">
                {t(group.titleKey)}
              </h3>
            </div>
            <div className="skills-pill-container">
              {group.skills.map(skill => (
                <SkillPill key={skill.name} name={skill.name} icon={skill.icon} invert={skill.invert} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillPill({ name, icon, invert }) {
  return (
    <div className="skill-pill">
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={32}
          height={32}
          style={invert ? { filter: 'invert(1)' } : undefined}
          onError={(e) => {
            const span = document.createElement('span');
            span.className = 'icon-fallback';
            span.textContent = name.charAt(0).toUpperCase();
            e.currentTarget.replaceWith(span);
          }}
        />
      ) : (
        <span className="icon-fallback">{name.charAt(0).toUpperCase()}</span>
      )}
      <span>{name}</span>
    </div>
  );
}
