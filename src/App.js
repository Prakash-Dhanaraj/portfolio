import './App.css';
import About from './components/about';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App"> 
      <Headers/>
      <Hero/>
      <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
