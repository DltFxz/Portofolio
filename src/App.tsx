import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Project";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/MediaSocial";
import MusicPlayer from "./components/MusicPlayer"; 

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <MusicPlayer />
      <Skills />
      <Tools />
      {/* <Projects /> */}
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
