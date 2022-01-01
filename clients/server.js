import { config } from "dotenv";
config();
import cors from "cors";
import express, { urlencoded } from "express";
import path from "path";
import { json } from "body-parser";
const app = express();
import { initializeApp, credential as _credential, firestore } from "firebase-admin";
const port = process.env.PORT || 8080;
import twilio from "twilio";
let phone;
let one;
let key;
let gmail = `${one}`;

import serviceAccount from "../its-called-god-firebase-adminsdk-bpmzw-116bf1efd7.json";
initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: "https://its-called-god-default-rtdb.firebaseio.com",
});
const db = firestore();
import { createTransport } from "nodemailer";
//firebase admin sdk

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "mailsendtest1299@gmail.com",
    pass: "1234567@test", // naturally, replace both with your real credentials or an application-specific password
  },
});
//

app.use(
  cors({
    orgin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("This is server home page.");
});
// Handling request
app.post("/r", (req, res) => {
  res.send("hi");

  let key = req.body.key;
  let one = req.body.name;
  let phone = req.body.phone;
  console.log(req.body.name);
  console.log(req.body.key);
  console.log(req.body.phone);
  //
  res.json.toString([
    {
      email_recieved: req.body.name,
      phone_number: req.body.phone,
    },
  ]);
  //
  var mailOptions = {
    from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
    to: `${one}`,
    subject: "G.O.D.",
    text:
      "Greetings From G.O.D " +
      "G.O.D would like for you to please take a moment to visit" +
      "www.Jesus-Today.com." +
      "G.O.D would like for you to know " +
      "your financial burdens have been placed with G.O.D’s Right Hand." +
      "Visit now and claim your FREE account. G.O.D is here" +
      "to help you with your financial burdens.",
    html:
      "<h1>Greetings From G.O.D</h1> " +
      "G.O.D would like for you to please take a moment to visit  " +
      " www.Jesus-Today.com." +
      "<b>G.O.D would like for you to know</b> " +
      "your financial burdens have been placed with G.O.D’s Right Hand." +
      "Visit now and claim your FREE account. G.O.D is here " +
      "to help you with your financial burdens.",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  //twilio sms Setup
  const accountSid = "AC59fb001037102bb22dccf4ae42693fa5";
  const authToken = "08d415780b42393acda8f08930fe1ec8";
  //
  const client = twilio(accountSid, authToken);
  if (key == true) {
    let msg =
      "Greetings From G.O.D" +
      "G.O.D would like for you to please take a moment to visit" +
      "www.Jesus-Today.com." +
      "G.O.D would like for you to know " +
      "your financial burdens have been placed with G.O.D’s Right Hand." +
      "Visit now and claim your FREE account. G.O.D is here";
    "to help you with your financial burdens.",
      client.messages
        .create({
          body: msg,
          from: "+17035961890",
          to: `${phone}`,
        })
        .then(function () {
          (message) => console.log(message.sid);
        })
        .catch((err) => console.error(err));
  } 
  

  if(cms == 'sms') {
  db.collection("Added Accounts")
    .doc(`${one}`)
    .onSnapshot((doc) => {
      console.log("Current data: ", doc.data());

      client.messages
        .create({
          body: "your account have been placed by" + doc.data(),
          from: "+17035961890",
          to: `${phone}`,
        })
        .then(function () {
          (message) => console.log(message.sid);
        })
        .catch((err) => console.error(err));
    });

  db.collection("Added Accounts")
    .doc(`${one}`)
    .collection("Dates")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("Current data: ", doc.data());
        //data.payments_1
        if (doc.exists) {
          if (doc.data().payments == "1") {
            client.messages
              .create({
                body:
                  "your payment date is" +
                  "payment one:" +
                  doc.data().payment_one +
                  "Your repayment option is 25% due, 1 payment",
                from: "+17035961890",
                to: `${phone}`,
              })
              .then((message) => console.log(message.sid))
              .catch((err) => console.error(err));
          }
          //two payment
          else if (doc.data().payments == "6") {
            client.messages
              .create({
                body:
                  "your payment dates are" +
                  "payment one:" +
                  doc.data().payment_one +
                  "payment two:" +
                  doc.data().payment_two +
                  "payment three:" +
                  doc.data().payment_three +
                  "payment four:" +
                  doc.data().payment_four +
                  "payment five:" +
                  doc.data().payment_five +
                  "payment six:" +
                  doc.data().payment_six +
                  "Your repayment option is 60% due, 6 payments",
                from: "+17035961890",
                to: `${phone}`,
              })
              .then((message) => console.log(message.sid))
              .catch((err) => console.error(err));
          }

          //three payment
          else if (doc.data().payments == "12(1)") {
            client.messages
              .create({
                body:
                  "your payment dates are" +
                  "payment one:" +
                  doc.data().payment_one +
                  "payment two:" +
                  doc.data().payment_two +
                  "payment three:" +
                  doc.data().payment_three +
                  "payment four:" +
                  doc.data().payment_four +
                  "payment five:" +
                  doc.data().payment_five +
                  "payment six:" +
                  doc.data().payment_six +
                  "payment seven:" +
                  doc.data().payment_seven +
                  "payment eight:" +
                  doc.data().payment_eight +
                  "payment nine:" +
                  doc.data().payment_nine +
                  "payment ten:" +
                  doc.data().payment_ten +
                  "payment eleven:" +
                  doc.data().payment_eleven +
                  "payment twelve:" +
                  doc.data().payment_twelve +
                  "Your repayment option is 75% due, 12 payments",
                from: "+17035961890",
                to: `${phone}`,
              })
              .then((message) => console.log(message.sid))
              .catch((err) => console.error(err));
          } else if (doc.data().payments == "12") {
            client.messages
              .create({
                body:
                  "your payment dates are" +
                  "payment one:" +
                  doc.data().payment_one +
                  "payment two:" +
                  doc.data().payment_two +
                  "payment three:" +
                  doc.data().payment_three +
                  "payment four:" +
                  doc.data().payment_four +
                  "payment five:" +
                  doc.data().payment_five +
                  "payment six:" +
                  doc.data().payment_six +
                  "payment seven:" +
                  doc.data().payment_seven +
                  "payment eight:" +
                  doc.data().payment_eight +
                  "payment nine:" +
                  doc.data().payment_nine +
                  "payment ten:" +
                  doc.data().payment_ten +
                  "payment eleven:" +
                  doc.data().payment_eleven +
                  "payment twelve:" +
                  doc.data().payment_twelve +
                  "Your repayment option is 100% due, 12 payments",
                from: "+17035961890",
                to: `${phone}`,
              })
              .then((message) => console.log(message.sid))
              .catch((err) => console.error(err));
          }
        }
      });
    })
  }else{
    db.collection("Added Accounts")
    .doc(`${one}`)
    .collection("Dates")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("Current data: ", doc.data());
        //data.payments_1
        if (doc.exists) {
          if (doc.data().payments == "1") {
    var mailOptions = {
      from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
      to: `${one}`,
      subject: "G.O.D.",
      text:
      "your payment date is" +
      "payment one:" +
      doc.data().payment_one +
      "Your repayment option is 25% due, 1 payment",
      html:
        "<h1>Greetings From G.O.D</h1> " +
        "your payment date is" +
      "payment one:" +
      doc.data().payment_one +
      "Your repayment option is 25% due, 1 payment"
      + 'visit G.O.D. '+ '<b>jesus-today.com</b>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } else if (doc.data().payments == "6") {
    var mailOptions = {
      from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
      to: `${one}`,
      subject: "G.O.D.",
      text:
      "your payment dates are" +
      "payment one:" +
      doc.data().payment_one +
      "payment two:" +
      doc.data().payment_two +
      "payment three:" +
      doc.data().payment_three +
      "payment four:" +
      doc.data().payment_four +
      "payment five:" +
      doc.data().payment_five +
      "payment six:" +
      doc.data().payment_six +
      "Your repayment option is 60% due, 6 payments",
      html:
        "<h1>Greetings From G.O.D</h1> " +
        "your payment dates are" +
        "payment one:" +
        doc.data().payment_one +
        "payment two:" +
        doc.data().payment_two +
        "payment three:" +
        doc.data().payment_three +
        "payment four:" +
        doc.data().payment_four +
        "payment five:" +
        doc.data().payment_five +
        "payment six:" +
        doc.data().payment_six +
        "Your repayment option is 60% due, 6 payments"
      + 'visit G.O.D. '+ '<b>jesus-today.com</b>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }else if (doc.data().payments == "12(1)") {
    var mailOptions = {
      from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
      to: `${one}`,
      subject: "G.O.D.",
      text:
     "your payment dates are" +
                  "payment one:" +
                  doc.data().payment_one +
                  "payment two:" +
                  doc.data().payment_two +
                  "payment three:" +
                  doc.data().payment_three +
                  "payment four:" +
                  doc.data().payment_four +
                  "payment five:" +
                  doc.data().payment_five +
                  "payment six:" +
                  doc.data().payment_six +
                  "payment seven:" +
                  doc.data().payment_seven +
                  "payment eight:" +
                  doc.data().payment_eight +
                  "payment nine:" +
                  doc.data().payment_nine +
                  "payment ten:" +
                  doc.data().payment_ten +
                  "payment eleven:" +
                  doc.data().payment_eleven +
                  "payment twelve:" +
                  doc.data().payment_twelve +
                  "Your repayment option is 75% due, 12 payments",
      html:
        "<h1>Greetings From G.O.D</h1> " +
        "your payment dates are" +
        "payment one:" +
        doc.data().payment_one +
        "payment two:" +
        doc.data().payment_two +
        "payment three:" +
        doc.data().payment_three +
        "payment four:" +
        doc.data().payment_four +
        "payment five:" +
        doc.data().payment_five +
        "payment six:" +
        doc.data().payment_six +
        "payment seven:" +
        doc.data().payment_seven +
        "payment eight:" +
        doc.data().payment_eight +
        "payment nine:" +
        doc.data().payment_nine +
        "payment ten:" +
        doc.data().payment_ten +
        "payment eleven:" +
        doc.data().payment_eleven +
        "payment twelve:" +
        doc.data().payment_twelve +
        "Your repayment option is 75% due, 12 payments "+
        
       'visit G.O.D. '+ '<b>jesus-today.com</b>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } else if (doc.data().payments == "12") {
    var mailOptions = {
      from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
      to: `${one}`,
      subject: "G.O.D.",
      text:
     "your payment dates are" +
                  "payment one:" +
                  doc.data().payment_one +
                  "payment two:" +
                  doc.data().payment_two +
                  "payment three:" +
                  doc.data().payment_three +
                  "payment four:" +
                  doc.data().payment_four +
                  "payment five:" +
                  doc.data().payment_five +
                  "payment six:" +
                  doc.data().payment_six +
                  "payment seven:" +
                  doc.data().payment_seven +
                  "payment eight:" +
                  doc.data().payment_eight +
                  "payment nine:" +
                  doc.data().payment_nine +
                  "payment ten:" +
                  doc.data().payment_ten +
                  "payment eleven:" +
                  doc.data().payment_eleven +
                  "payment twelve:" +
                  doc.data().payment_twelve +
                  "Your repayment option is 100% due, 12 payments",
      html:
        "<h1>Greetings From G.O.D</h1> " +
        "your payment dates are" +
        "payment one:" +
        doc.data().payment_one +
        "payment two:" +
        doc.data().payment_two +
        "payment three:" +
        doc.data().payment_three +
        "payment four:" +
        doc.data().payment_four +
        "payment five:" +
        doc.data().payment_five +
        "payment six:" +
        doc.data().payment_six +
        "payment seven:" +
        doc.data().payment_seven +
        "payment eight:" +
        doc.data().payment_eight +
        "payment nine:" +
        doc.data().payment_nine +
        "payment ten:" +
        doc.data().payment_ten +
        "payment eleven:" +
        doc.data().payment_eleven +
        "payment twelve:" +
        doc.data().payment_twelve +
        "Your repayment option is 100% due, 12 payments "+
        
       'visit G.O.D. '+ '<b>jesus-today.com</b>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}
      })
    })
  }
})



// Server Setup
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

//gmail

