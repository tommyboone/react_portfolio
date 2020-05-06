import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title">Tommy Boone</h4>
            <h5>
                Like what you see? Let's work together.
                <br />
                <br />
                <a href="mailto:tommyboone23@gmail.com">tommyboone23@gmail.com</a>
        
        
            </h5>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/">About </a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="/projects">Projects</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Resumé</a>
              </li>
           
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;