import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Project from "./PortfolioContainer/Projects/Project";
import Navbar from "./PortfolioContainer/Header/Header";
import Certification from "./PortfolioContainer/Certification/Certification";
import Skills from "./PortfolioContainer/Skills/Skills";
import Footer from "./PortfolioContainer/Footer/Footer";

function App() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <Skills />
      <Certification />
      <Footer />
    </div>
  );
}

export default App;
