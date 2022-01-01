
const hi = localStorage.getItem("ID")

$.ajax({
    type: 'POST',
    url: 'https://SorrowfulVerifiableAdaware.programmerboi.repl.co/f',
    crossDomain: true,
    data: 
    {
        'name': hi,
        
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