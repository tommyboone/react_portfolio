import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

import "./Contact.css"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => {
    const inputId = e.target.name;
    const value = e.target.value;
    this.setState({ [inputId]: value });
  };

 

  render() {
  const sendEmail = (e) => {
    e.preventDefault();
    return(
       "mailto:tommyboone23@gmail.com"
    ) 
  }
    return (
      <MDBContainer fluid className="contact-container">
        <MDBRow>
          <MDBCol md="2" />
          <MDBCol md="8">
            <form
              onSubmit={sendEmail}
              method="PUT"
              encType="text/plain"
              className="hoverable"
              style={{ padding: 38 }}
            >
              <p className="h3 text-center mb-4">Let's work together.</p>
              <div className="grey-text">
                <MDBInput
                  label="Your Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  icon="user"
                  group
                  type="text"
                />
                <MDBInput
                  label="E-mail address"
                  icon="envelope"
                  name="email"
                  group
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                />
                <MDBInput
                  label="Subject"
                  name="subject"
                  icon="tag"
                  group
                  type="text"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  value={this.state.message}
                  onChange={this.handleChange}
                  name="message"
                  label="Your message..."
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="blue" type="submit">
                  Send <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="2" />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Contact;
