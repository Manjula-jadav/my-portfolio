import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import NavbarComp from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarComp />

      {/* Main Sections */}
      <main>
        <section id="home">
          <Banner />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
