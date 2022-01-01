// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const twilio = require('twilio');
//import twilio from '/twilio';
const accountSid = 'AC59fb001037102bb22dccf4ae42693fa5';
const authToken = '08d415780b42393acda8f08930fe1ec8';

const client = twilio(accountSid, authToken);
//localStorage.setItem('key', true)
const key = document.getElementById("key")//localStorage.getItem('key')
const id = document.getElementById('id');
const phone = document.getElementById('phone').innerText
if(key == true){
  

  let msg = 'Greetings From G.O.D'+

 
  'G.O.D would like for you to please take a moment to visit'+
   'www.Jesus-Today.com.'
    +'G.O.D would like for you to know '
    +'your financial burdens have been placed with G.O.D’s Right Hand.'
     +'Visit now and claim your FREE account. G.O.D is here' 
     'to help you with your financial burdens.',

  client.messages
  .create({
     body: msg,
     from: '+17035961890',
     to: phone
   })
  .then(function(){message => console.log(message.sid)
  })
  .catch(err => console.error(err))

}else if(document.getElementById('cms').innerText == 'sms'){
  db.collection("Added Accounts").doc(id)
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());

    }).then(function(){

  
  client.messages
    .create({
       body: "your account have been placed by" + doc.data().Name,
       from: '+17035961890',
       to: phone
     })
    .then(function(){message => console.log(message.sid)
    })
    .catch(err => console.error(err))
})  

db.collection("Added Accounts").doc(id).collection("Dates").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
  console.log("Current data: ", doc.data());
//data.payments_1
if(doc.exists){

if(doc.data().payments == '1'){
client.messages
.create({
   body: "your payment date is"+
   'payment one:' + doc.data().payment_one
   +"Your repayment option is 25% due, 1 payment",
   from: '+17035961890',
   to: phone
 })
.then(message => console.log(message.sid)
)
.catch(err => console.error(err))
}
//two payment
else if(doc.data().payments == '6'){
  client.messages
  .create({
     body: "your payment date is"

     +'payment one:' + doc.data().payment_one
     +'payment two:' + doc.data().payment_two
     +'payment three:' + doc.data().payment_three
     +'payment four:' + doc.data().payment_four
     +'payment five:' + doc.data().payment_five
     +'payment six:' + doc.data().payment_six
     +"Your repayment option is 60% due, 6 payments",
     from: '+17035961890',
     to: phone
   })
  .then(message => console.log(message.sid)
  )
  .catch(err => console.error(err))
  }

//three payment
else if(doc.data().payments == '12(1)'){
  client.messages
  .create({
     body: "your payment dates are"

     +'payment one:' + doc.data().payment_one
     +'payment two:' + doc.data().payment_two
     +'payment three:' + doc.data().payment_three
     +'payment four:' + doc.data().payment_four
     +'payment five:' + doc.data().payment_five
     +'payment six:' + doc.data().payment_six
     +'payment seven:' + doc.data().payment_seven
     +'payment eight:' + doc.data().payment_eight
     +'payment nine:' + doc.data().payment_nine
     +'payment ten:' + doc.data().payment_ten
     +'payment eleven:' + doc.data().payment_eleven
     +'payment twelve:' + doc.data().payment_twelve
     +"Your repayment option is 75% due, 12 payments",
     from: '+17035961890',
     to: phone
   })
  .then(message => console.log(message.sid)
  )
  .catch(err => console.error(err))
  }

  else if(doc.data().payments == '12'){
    client.messages
    .create({
       body: "your payment dates are"
  
       +'payment one:' + doc.data().payment_one
       +'payment two:' + doc.data().payment_two
       +'payment three:' + doc.data().payment_three
       +'payment four:' + doc.data().payment_four
       +'payment five:' + doc.data().payment_five
       +'payment six:' + doc.data().payment_six
       +'payment seven:' + doc.data().payment_seven
       +'payment eight:' + doc.data().payment_eight
       +'payment nine:' + doc.data().payment_nine
       +'payment ten:' + doc.data().payment_ten
       +'payment eleven:' + doc.data().payment_eleven
       +'payment twelve:' + doc.data().payment_twelve
       +"Your repayment option is 100% due, 12 payments",
       from: '+17035961890',
       to: phone
     })
    .then(message => console.log(message.sid)
    )
    .catch(err => console.error(err))
    }

  }
})  
})

}


 

