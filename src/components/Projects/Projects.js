import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBBtn
} from "mdbreact";

import "./Projects.css"

const Projects = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/team-profile.png"
                alt="First slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Team profile generator</h3>
              <p>A node application to generate a short summary of team members, their role, and their contact info</p>
              <MDBBtn gradient="blue" href="https://github.com/tommyboone/Template_Engine-Employee_Summary">GitHub</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/quiz-game.png"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Quiz Game</h3>
              <p>A full-stack quiz game application to help pass the time in quarantine</p>
              <MDBBtn gradient="blue" href="https://github.com/kelly-bazella/Project-2">GitHub</MDBBtn>
              <MDBBtn gradient="blue" href="https://gold-team-quiz.herokuapp.com/">Website</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/travel-master.png"
                alt="Third slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Travel Master</h3>
              <p>A travel application where users can learn more about the places they are visiting</p>
              <MDBBtn gradient="blue" href="https://github.com/stevekindt/Project-1">GitHub</MDBBtn>
              <MDBBtn gradient="blue" href="https://stevekindt.github.io/Project-1/">Website</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/Budget_Tracker.png"
                alt="First slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Budget Tracker</h3>
              <p>A financial tracking application that allows users to enter transactions with or without an internet connection.</p>
              <MDBBtn gradient="blue" href="https://github.com/tommyboone/Budget-Tracker">GitHub</MDBBtn>
              <MDBBtn gradient="blue" href="https://budget-tracker-tb.herokuapp.com/">Website</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/Fitness_Tracker.png"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Fitness Tracker</h3>
              <p>A full-stack workout tracking application that allows users to view, create, and track daily workouts.</p>
              <MDBBtn gradient="blue" href="https://github.com/tommyboone/Workout-Tracker">GitHub</MDBBtn>
              <MDBBtn gradient="blue" href="https://workout-tracker-tb.herokuapp.com/">Website</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src="./images/Note-Taker_App.png"
                alt="Third slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Note Taker</h3>
              <p>A To-Do List style application that allows users to write and save tasks to be performed, and delete tasks once they've been completed.</p>
              <MDBBtn gradient="blue" href="https://github.com/tommyboone/Note-Taker">GitHub</MDBBtn>
              <MDBBtn gradient="blue" href="https://tommyboone.github.io/Note-Taker/">Website</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

  );
};

export default Projects;
