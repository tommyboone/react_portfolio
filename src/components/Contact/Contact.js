import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import "./Contact.css";
import Notification from "../Notification/Notification";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState = {
      name: event.target.value,
      email: event.target.value,
      subject: event.target.value,
      message: event.target.value,
    };
  }

  handleSubmit(event) {
    console.log("A message was sent " + this.setState.name);
    event.preventDefault();
    axios
      .post("http://localhost:3001/emails", this.setState)
      .then(function (res) {
        console.log(res);
      });
  }

  render() {
    return (
      <MDBContainer fluid className="contact-container">
        <MDBRow>
          <MDBCol md="2" />
          <MDBCol md="8">
            <form
              onSubmit={this.handleSubmit}
              method="POST"
              encType="text/plain"
              className="hoverable"
              style={{ padding: 38 }}
            >
              <p className="h3 text-center mb-4">Let's work together.</p>
              <div className="grey-text">
                <MDBInput
                  label="Your Name"
                  name={this.state.name}
                  value={this.state.value}
                  onChange={this.handleChange}
                  icon="user"
                  group
                  type="text"
                />
                <MDBInput
                  label="E-mail address"
                  icon="envelope"
                  name={this.state.email}
                  group
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="email"
                />
                <MDBInput
                  label="Subject"
                  name={this.state.subject}
                  icon="tag"
                  group
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  value={this.state.value}
                  onChange={this.handleChange}
                  name={this.state.message}
                  label="Your message..."
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                {" "}
                <MDBBtn outline color="blue" type="submit">
                  Send{" "}
                  <MDBIcon
                    far
                    icon="paper-plane"
                    onClick={Notification}
                    className="ml-2"
                  />
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
