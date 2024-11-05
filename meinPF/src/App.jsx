import "./App.css";
import LanguageSwitcher from "../../meinPF/src/sections/LanguageSwitsher/LanguageSwitsher";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Lotfi from "./sections/lotfi/Lotfi";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import SoftSkills from "./sections/Skills/SoftSkills";

function App() {
  return (
    <>
      <div className="bigContainer">
        <LanguageSwitcher />
        <Lotfi />
        <Projects />
        <Skills />
        <SoftSkills/>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
