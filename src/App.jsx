import "./App.css";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Form from "./components/Form";
import Projects from "./components/Projects";
import Faqs from "./components/Faqs";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar brand="My Web" />
      <Herosection brand="My Website" productname="Desktop" />
      <AboutMe />
      <Services />
      <Projects />
      <Skills />
      <Faqs />
      <Form />
      <Footer brand="Contact Us" />
    </>
  );
}

export default App;
