export default function SobreMi() {
  return (
    <section id="sobre-mi" className="section">
      <div className="section-label">01 — sobre mí</div>
      <h2 className="section-title">¿Quién soy?</h2>

      <div className="about-grid">
        <div className="about-card wide">
          <h3>Presentación</h3>
          <p>
            Soy<strong> desarrollador backend </strong>con enfoque full stack. Me especializo
            en diseñar arquitecturas escalables, modelar bases de datos y construir
            APIs seguras y bien documentadas con Java, Spring Boot y PHP. Utilizo 
            Docker, Postman y Swagger como parte central de mi flujo de trabajo para
            desarrollar, testear y documentar servicios. Mi experiencia en frontend 
            con React y Angular, sumada al diseño UX/UI en Figma, me permite pensar 
            soluciones de punta a punta — entendiendo tanto la lógica del servidor 
            como la experiencia del usuario.
          </p>
        </div>

        <div className="about-card">
          <h3>Perfil</h3>
          <p>
            Resuelvo problemas complejos con soluciones bien estructuradas. Disfruto
            trabajar en equipo, tomar decisiones técnicas con criterio y seguir 
            aprendiendo. Creciendo en IT, proyecto a proyecto.
          </p>
        </div>
        
      </div>
    </section>
  );
}
