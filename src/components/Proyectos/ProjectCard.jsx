import { useTranslation } from 'react-i18next';

export default function ProjectCard({ title, description, tags, image, link, deploys }) {
  const { t } = useTranslation();

  return (
    <div className="project-card" onClick={() => link && link !== t('projectCard.inDevelopment') && window.open(link, '_blank')}>
      <div className="project-img">
        {image
          ? <img src={image} alt={title} />
          : <span className="project-img-placeholder">{t('projectCard.placeholder')}</span>
        }
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Múltiples botones de deploy: cada uno con su propio link y label traducible.
            Solo se renderizan si el array deploys tiene al menos una entrada. */}
        {deploys && deploys.length > 0 && deploys.map((d, i) => (
          <a
            key={i}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="deploy-link"
            onClick={(e) => e.stopPropagation()}
          >
            {t(d.labelKey)}
          </a>
        ))}
      </div>
    </div>
  );
}
