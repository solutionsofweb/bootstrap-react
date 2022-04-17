import SideBar from './components/sideBar';
import Home from './components/home';
import About from './components/about';
import Facts from './components/facts';
import Skills from './components/skills';
import Resume from './components/resume';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTop from './components/backToTop';
import './App.css';

function App() {
  return (
    <div>
      <SideBar />
      <Home />
  
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>

  );
}

export default App;
