import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';
import Formacion from './components/Formacion/Formacion';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Tecnologias from './components/Tecnologias/Tecnologias';
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
        <Proyectos />
        <Tecnologias />
        <Formacion />
        <Experiencia />
        <Contacto />
      </main>
      <footer className="footer">
      </footer>
    </>
  );
}

export default App;
