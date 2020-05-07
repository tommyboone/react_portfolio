import React from "react";
import Header from "./components/Header/header";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ProjectCard from "./components/Projects/Projects-Page"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch />
        <Route exact path={["", "/"]}>
          <Header />
          <Jumbotron />
          <About />
          <Projects />
          <Footer />
        </Route>
        <Route exact path ={"/projects"}>
          <Header />
          <ProjectCard />
          <Footer />
        </Route>
        <Route exact path={"/contact"}>
          <Header />
          <Contact />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
