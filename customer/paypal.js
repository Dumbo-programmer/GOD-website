/*paypal.Buttons({
    style: {
      layout:  'horizontal',
      color:   'gold',
      shape:   'pill',
      label:   'paypal',
      
    },
    createOrder: function(data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.09'
            }
          }]
        });
      }
  }).render('#paypal-button-container');*/

  const i = localStorage.getItem('payID')
  const ID = localStorage.getItem('ID')

const amount = parseInt(localStorage.getItem('due'))
let ii;
let iii;



console.log(amount)
if(localStorage.getItem('payments') == '12'){
 ii = (amount / 12).toPrecision(6);
localStorage.setItem('temp', ii)

const temp = parseInt(localStorage.getItem('temp'))
window.my = temp//toString(ii)
console.log(ii)

}else if(localStorage.getItem('payments') == '12(1)'){
  const real = (amount/100)*75;
  
  ii = (real / 12).toPrecision(6);
  localStorage.setItem('temp', ii) 
  const temp = parseInt(localStorage.getItem('temp'))
  window.my = temp//toString(ii)
  console.log(ii)
  

}else if(localStorage.getItem('payments') == '6'){
 const extra = amount / 2
  ii = (extra / 6).toPrecision(6);
  localStorage.setItem('temp', ii)
  const temp = parseInt(localStorage.getItem('temp'))
  window.my = temp//toString(ii)
  console.log(temp)
}else if(localStorage.getItem('payments') == '1'){
  const real = (amount/100)*25;
  
  ii = (real / 12).toPrecision(6);
  localStorage.setItem('temp', ii) 
  const temp = parseInt(localStorage.getItem('temp'))
  window.my = temp//toString(ii)
  console.log(ii)
}
console.log(my)

function CoolFunc(){
  if(!localStorage.getItem('vars')){
    db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
      payment_one: 'completed',
   
    }, { merge: true });
    localStorage.setItem('var', '1')
  }else{

}

  if(localStorage.getItem('var') == '1'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '2')
}else if(localStorage.getItem('var') == '2'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '3')
}else if(localStorage.getItem('var') == '3'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '4')
}else if(localStorage.getItem('var') == '4'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '5')
}else if(localStorage.getItem('var') == '5'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '6')
}else if(localStorage.getItem('var') == '6'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed'
  }, { merge: true });
  localStorage.setItem('var', '7')
}


if(localStorage.getItem('var') == '7'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '8')
}else if(localStorage.getItem('var') == '8'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '9')
}else if(localStorage.getItem('var') == '9'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '10')
}else if(localStorage.getItem('var') == '10'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '11')
}else if(localStorage.getItem('var') == '11'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    payment_eleven: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '12')
}else if(localStorage.getItem('var') == '12'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    payment_eleven: 'completed',
    payment_twelve: 'completed',
  }, { merge: true });
localStorage.setItem('var', '13')
}

}
function CoolFunc1(){
  if(!localStorage.getItem('vars')){
    db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
      payment_one: 'completed',
   
    }, { merge: true });
    localStorage.setItem('var', '1')
  }else{

}

  if(localStorage.getItem('var') == '1'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '2')
}else if(localStorage.getItem('var') == '2'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '3')
}else if(localStorage.getItem('var') == '3'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '4')
}else if(localStorage.getItem('var') == '4'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '5')
}else if(localStorage.getItem('var') == '5'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '6')
}else if(localStorage.getItem('var') == '6'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed'
  }, { merge: true });
  localStorage.setItem('var', '7')
}


if(localStorage.getItem('var') == '7'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '8')
}else if(localStorage.getItem('var') == '8'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '9')
}else if(localStorage.getItem('var') == '9'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed'
    
  }, { merge: true });
localStorage.setItem('var', '10')
}else if(localStorage.getItem('var') == '10'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '11')
}else if(localStorage.getItem('var') == '11'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    payment_eleven: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '12')
}else if(localStorage.getItem('var') == '12'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed',
    payment_seven: 'completed',
    payment_eight: 'completed',
    payment_nine: 'completed',
    payment_ten: 'completed',
    payment_eleven: 'completed',
    payment_twelve: 'completed',
  }, { merge: true });
localStorage.setItem('var', '13')
}

}
function CoolFunc2(){
  if(!localStorage.getItem('vars')){
    db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
      payment_one: 'completed',
   
    }, { merge: true });
    localStorage.setItem('var', '1')
  }else{

}

  if(localStorage.getItem('var') == '1'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    
  }, { merge: true });
localStorage.setItem('var', '2')
}else if(localStorage.getItem('var') == '2'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '3')
}else if(localStorage.getItem('var') == '3'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    
  }, { merge: true });
  localStorage.setItem('var', '4')
}else if(localStorage.getItem('var') == '4'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '5')
}else if(localStorage.getItem('var') == '5'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
  }, { merge: true });
  localStorage.setItem('var', '6')
}else if(localStorage.getItem('var') == '6'){
  db.collection("Added Accounts").doc(localStorage.getItem("creditor")).collection('Dates').doc(localStorage.getItem('creditor')).set({
    payment_one: 'completed',
    payment_two: 'completed',
    payment_three: 'completed',
    payment_four: 'completed',
    payment_five: 'completed',
    payment_six: 'completed'
  }, { merge: true });
  localStorage.setItem('var', '7')
}


}

  paypal.Buttons({
    style: {
      layout:  'horizontal',
      color:   'gold',
      shape:   'pill',
      label:   'paypal',
      
    },
    createOrder: function(data, actions) {
        // Set up the transaction
        const test = window.my
        console.log(test)
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: my,
            }
          }]
        });
      },
/////////////////////////////////////////////////////
onApprove: function(data, actions) {
  return actions.order.capture().then(function(orderData) {
    /*Successful capture! For dev/demo purposes:
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        var transaction = orderData.purchase_units[0].payments.captures[0];
        console.log('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
        */
       console.log('data::'+data+'::transaction'+orderData)
/////////
const oo = amount - parseInt(localStorage.getItem('temp'))
console.log(oo)
localStorage.setItem('due', oo)
  
        if(localStorage.getItem('payments') == '12'){
          CoolFunc();
          }else if(localStorage.getItem('payments') == '12(1)'){
            CoolFunc1(); 
          }else if(localStorage.getItem('payments') == '6'){
            CoolFunc2(); 
          }else if(localStorage.getItem('payments') == '1'){
             CoolFunc3(); 
          }
        
      
$.ajax({
  type: 'POST',
  url: 'https://SorrowfulVerifiableAdaware.programmerboi.repl.co/pay',
  crossDomain: true,
  data: 
  {
      'payID': i,
      //client paypal
      'amount': my,
      //amount
      'payer': ID,
      //customer ID(Email)
      
  },
  dataType: 'json',
  success: function(responseData, textStatus, jqXHR) {
      var value = responseData
      console.log(value+'::'+ textStatus+':::'+jqXHR);
  },
  error: function (responseData, textStatus, errorThrown) {
      console.log(errorThrown+ '::' + textStatus +':' + responseData)
  }
});
////////////  
  })
}

////////
// Or go to another URL:  actions.redirect('thank_you.html'); 
}).render('#paypal');


  
  