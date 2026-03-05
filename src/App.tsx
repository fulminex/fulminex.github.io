import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
