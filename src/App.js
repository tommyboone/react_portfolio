import React from "react";
import Navbar from "./components/NavBar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron/>
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
