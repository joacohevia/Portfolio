import './App.css';
import Contacto from './components/Contacto/Contacto';
import Formacion from './components/Formacion/Formacion';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Tecnologias from './components/Tecnologias/Tecnologias';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos />
        <Tecnologias />
        <Formacion />
        <Contacto />
      </main>
      <footer className="footer">
      </footer>
    </>
  );
}

export default App;
