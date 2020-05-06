import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBAnimation,
} from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBAnimation type="fadeIn" className="delay-1s slow">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
            ></MDBCardImage>
            <MDBCardBody className="text-center">
              <MDBCardTitle className="h3">
                {" "}
                <MDBAnimation type="fadeIn" className="delay-2s slow">
                  <h1>Hi! My name is Tommy. I am a Full-Stack Web Developer</h1>
                </MDBAnimation>
              </MDBCardTitle>
              <MDBAnimation type="flipInX" className="delay-3s">
                <MDBBtn href="/projects" gradient="blue" rounded>
                  View my projects
                </MDBBtn>
              </MDBAnimation>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBAnimation>
  );
};

export default Jumbotron;
