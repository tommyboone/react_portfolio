import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        show
        fade
        iconClassName="text-success"
        title="Message Sent!"
        message="Thanks for reaching out! I'll respond within 24 hours"
        text="just now"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}

export default Notification;