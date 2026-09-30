import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';
import Formacion from './components/Formacion/Formacion';
import Habilidades from './components/Habilidades/Habilidades';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>
      <footer>
        <p>
          © 2026 Joaquín Hevia
        </p>
      </footer>
    </>
  );
}

export default App;
