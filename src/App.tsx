import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
