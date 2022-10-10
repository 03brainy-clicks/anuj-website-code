import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";
// components

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
