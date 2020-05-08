require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const port = 3001;


var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.post("/emails", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;
  
  let composedMessage = {
    text:
      "Hey!\n\n" +
      ` Someone has contacted you through your website. Here is their contact information and message: \n\n` +
      `First Name: ${name} \n` +
      `Email Address: ${email} \n` +
      `Message: ${message} \n\n`,
    subject: `${subject}`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS, // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: process.env.DB_USER,
    to: "tommyboone23@gmail.com",
    subject: composedMessage.subject,
    text: composedMessage.text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
