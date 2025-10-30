import Navbar from './components/Navbar';
import HeroParallaxSection from './components/HeroParallaxSection';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Navbar />
      <main id="home">
        <HeroParallaxSection />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
