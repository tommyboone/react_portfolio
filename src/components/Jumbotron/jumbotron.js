import React from "react";
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const Jumbotron = () => {
  return (
   
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
            />
            <MDBCardBody className="text-center">
              <MDBCardTitle className="h3">Hi! My name is Tommy and I am a Full Stack Web Developer</MDBCardTitle>
              <MDBCardText>
       
              </MDBCardText>
              <MDBBtn href="#" gradient="blue" rounded>
                View my projects
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>

  )
}

export default Jumbotron;