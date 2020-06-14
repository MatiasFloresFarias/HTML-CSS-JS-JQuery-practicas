$('#btn1').click(function () {
    alert($('#parrafo').text());
});

$('#btn2').click(function () {
    alert($('#parrafo').html());
});

$('#btn3').click(function () {
    alert($('#cuadro').val());
});

$('#btn4').click(function () {
  
    let text = $('a:first')[0].firstChild.textContent; 
    alert(text);
   
});

