// -----------------------------------------acordeon--------------------------------------------------
$(function () {
    $("#accordion").accordion();
});
// ------------------------------------------Boton de fin de historia-----------------------------------
$(function () {
    $("#dialog").dialog({autoOpen: false, modal: true});
    $("#abrir").button().click(function () {
        $("#dialog").dialog("open");
    });
});
// ----------------------------------------------texto modificado-------------------------------------------
$( function() {
    $( "#resizable" ).resizable();
  } );