import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPaper,
  faGlobe,
  faLaptop,
  faTachometerAlt,
  faMobileAlt,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <MDBContainer className="about-container">
      <MDBAnimation reveal type="slideInLeft" className="">
        <MDBRow>
          <MDBCol>
            {" "}
            <FontAwesomeIcon icon={faHandPaper} className="fa-3x" />
            <p id="info1" className="info">
              Hello - Tommy here! I am Full-Stack Web Developer currently living
              in Minneapolis. I have experience with HTML, CSS, JavaScript,
              jQuery, CI platforms, templating engines, the MERN Stack, and
              several other programming languages.{" "}
            </p>
          </MDBCol>
          <MDBCol>
            {" "}
            <FontAwesomeIcon icon={faGlobe} className="fa-3x" />
            <p id="info2" className="info">
              I'm extremely passionate about web development and it's ability to
              solve real-world problems.......... mOre StuFf HeRe LaTeR.....
            </p>
          </MDBCol>
          <MDBCol>
            <FontAwesomeIcon icon={faLaptop} className="fa-3x" />
            <p id="info3" className="info">
              Most Recently, I decided to expand my skill set by enrolling in
              The Coding Bootcamp at the University of Minnesota. Currently
              seeking a Full-Time Opportunity as a developer{" "}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBAnimation>
      <br />
      <br />
      <MDBAnimation reveal type="slideInRight" className="">
      <MDBRow>
        <MDBCol>
          <FontAwesomeIcon icon={faTachometerAlt} className="fa-3x" />
          <p id="skills1" className="skills">
            Fast response times and quick page interaction
          </p>
        </MDBCol>
        <MDBCol>
          <FontAwesomeIcon icon={faMobileAlt} className="fa-3x" />
          <p id="skills2" className="skills">
            Mobile-Responsive so you can view your app on any device
          </p>
        </MDBCol>
        <MDBCol>
          <FontAwesomeIcon icon={faLightbulb} className="fa-3x" />
          <p id="skills3" className="skills">
            User friendly and Intuitive Design
          </p>
        </MDBCol>
        <MDBCol>
          <FontAwesomeIcon icon={faRocket} className="fa-3x" />
          <p id="skills4" className="skills">
            Dynamic interfaces to keep users engaged.
          </p>
        </MDBCol>
      </MDBRow>
      </MDBAnimation>
      
    </MDBContainer>
  );
}

export default About;
