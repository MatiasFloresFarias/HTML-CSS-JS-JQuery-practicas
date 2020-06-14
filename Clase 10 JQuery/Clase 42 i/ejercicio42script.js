$(function() {
    $("#cabecera").draggable();
});

$(function() {
    $("#accordion").accordion();
});

var nota = "";
$(function() {
    $("#calificacion").selectmenu({
        select: function(event, ui) {
            nota = $(this).val();
            // alert(nota)
        }
    });
});


$(function() {
    $("button")
        .button()
        .click(function() {
            alert(nota);
        })
});