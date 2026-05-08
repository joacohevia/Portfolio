import fotoPerfil from '../../assets/FotoPerfilcomp.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual">
        <div className="avatar-ring">
            <img src={fotoPerfil} alt="img" className="avatar-inner"/>
          <div/>
        </div>
      </div>

      <div className="hero-content">
        <h1><span>Joaquín Ramiro</span><br/>Hevia</h1>
        <p className="hero-sub">Backend Developer | Java · Spring Boot · PHP
           · APIs REST · SQL | Full Stack · React · Angular</p>
        <p className="hero-desc">
          Desarrollo sistemas backend y los conecto con interfaces limpias. 
          Java, Spring Boot, y PHP en el servidor, React y Angular en el cliente, todo con foco en 
          <strong> arquitectura y escalabilidad.</strong>
        </p>
        
          {/*
          <div className="hero-btns">
          <a href="#proyectos" className="btn-primary">Ver proyectos ↗</a>
          <a href="#sobre-mi" className="btn-outline">Sobre mí</a>
          </div>
          */}
      </div>
    </section>
  );
}
