import React from "react";
import "./About.css"

function About() {
  return (
    <div className="container about-container">
      <div className="row ">
        <div className="col-xs-12 col-sm-12 col-md-4 wow">
          <p id="info1" class="info">
            Hello - Tommy here! I am Full-Stack Web Developer currently living
            in Minneapolis. I have experience with HTML, CSS, JavaScript, Node,
            React, SQL, JSX, and several other programming languages.
          </p>
        </div>
        <div className="col-xs-12 col sm-12 col-md-4 wow">
          <p id="info2" class="info">
            I have been in the fitness industry for the last 10 years working as
            a personal trainer and head programmer for CrossFit affiliates. My
            certifications include: CrossFit Level 3, Precision Nutrition, USAW
            Weightlifting and Kettlebell Instructor. This has been a rewarding
            career working with people from all walks of life to improve their
            health and happiness.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 wow">
          <p id="info3" class="info">
            Currently, I am expanding my skill set by enrolling in a Web
            Development Bootcamp at the University of Minnesota. My hope is to
            transition into a new career as a full stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
