export default function ProjectCard({ title, description, tags, image, link, deploy }) {
  return (
    <div className="project-card" onClick={() => link && window.open(link, '_blank')}>
      <div className="project-img">
        {image
          ? <img src={image} alt={title} />
          : <span className="project-img-placeholder">[ captura del proyecto ]</span>
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
        {/* 👇 Link de deploy: solo se renderiza si existe el prop */}
        {deploy && (
          <a 
            href={deploy} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="deploy-link"   
            onClick={(e) => e.stopPropagation()}
          >
            Ver demo →
          </a>
        )}
      </div>
    </div>
  );
}
