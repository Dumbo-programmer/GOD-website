"use strict";
const nodemailer = require("nodemailer");
var port = 5500 
//const fs = require("fs");
// read the file
//const content = fs.readFileSync("clients/Dashboard.html").toString();
// print it
console.log(content)


// Handling request 
/*app.post("/request", (req, res) => {
   res.json([{
      name_recieved: req.body.name,
      designation_recieved: req.body.designation
   }])
   res.status(200)
   res.writeHead(200, {'Content-Type': 'application/json'})
   res.header("Access-Control-Allow-Origin", "*");
  
   res.header("Access-Control-Allow-Headers", "Origin, http://127.0.0.1:5500/clients/confirm.html,application/json, POST");

   //
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/clients/confirm.html');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'localhost:3000','application/json');
      res.setHeader('Allow', 'POST, GET, OPTIONS, PUT')
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);  //
      res. setHeader("Access-Control-Allow-Origin", "*");

   console.log(req.body.name)
console.log(req.body.designation)
})
  */
// Server Setup


let phone;
let gmail = 'tawhidbinomar@gmail.com';
//let ok;
/*var admin = require("firebase-admin");
var serviceAccount = require("../its-called-god-firebase-adminsdk-bpmzw-116bf1efd7.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://its-called-god-default-rtdb.firebaseio.com"
});

  const db = admin.firestore()
 let docu = db.collection('Added Accounts').doc('hi')

docu.get().then(doc => {
   console.log(`Found it in collection`);
   let phone = doc.data().phone
   let gmail = doc.data().gmail
 })
*/
/*app.get('/clients/confirm.html', (req, res)=>{
    })
  app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})

app.post('/clients/confirm.html/email', (req, res) =>{
  console.log(req.body.ID) 
 
  })*/
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailsendtest1299@gmail.com',
      pass: '1234567@test' // naturally, replace both with your real credentials or an application-specific password
    }
  });

  var mailOptions = {
    from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
    to: `${gmail}`,
    subject: 'G.O.D.',
    text: 'Greetings From G.O.D '+
    'G.O.D would like for you to please take a moment to visit'+
     'www.Jesus-Today.com.'
      +'G.O.D would like for you to know '
      +'your financial burdens have been placed with G.O.D’s Right Hand.'
       +'Visit now and claim your FREE account. G.O.D is here' 
       +'to help you with your financial burdens.',
       html: '<h1>Greetings From G.O.D</h1> ' +
       'G.O.D would like for you to please take a moment to visit  '+
        ' www.Jesus-Today.com.'
         +'<b>G.O.D would like for you to know</b> '
         +'your financial burdens have been placed with G.O.D’s Right Hand.'
          +'Visit now and claim your FREE account. G.O.D is here ' 
          +'to help you with your financial burdens.'
}
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});  
//console.log(info)
 // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
   //console.log("message sent")
  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou
//}

//main().catch(console.error);
//console.log(net)
/*
var ip = require("ip");
console.dir ( ip.address() );
const express = require("express")
const app = express()

const router = express.Router();
const port = 5500
//var xoauth2 = require('xoauth2');
//var smtpTransport = require('nodemailer-smtp-transport');
app.use('/', router)
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

app.get('/clients/Dashboard.html', (req, res)=>{
 // res.send("Welcome to your server")
 res.sendFile(path.join(__dirname + '/Dashboard.html'));
  console.log(req.query)
  })
// async..await is not allowed in global scope, must use a wrapper
//async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  
  //app.listen(port, ()=>{
    //console.log(`Server is running on port ${port}`)
})*/
/*var ip = require("ip");
console.log ( ip.address() );
  ip.address();

const ipify = require('ipify');
 
(async () => {
    //console.log(await ipify());
    //=> '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
 let ok = await ipify({useIPv6: false});
    console.log(await ipify({useIPv6: false}));
    //=> '82.142.31.236'
})().catch(err => console.log(err))*/
// node clients/gmail.js
//'tawhidbinomar@gmail.com'
//`${ok}`