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
              style={{height:550, width:1600}}
            ></MDBCardImage>
            <MDBCardBody className="text-center">
              <MDBCardTitle className="h3">
                {" "}
                <MDBAnimation type="fadeIn" className="delay-2s slow">
                  <h3>Hello, I'm Tommy Boone. I'm a Full-Stack Web Developer</h3>
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
