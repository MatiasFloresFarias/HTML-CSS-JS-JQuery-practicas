var mensaje
var fechaInicio
var fechaFin
var finAno = new Date(2021, 0, 1, 0, 0, 0)



$(function() {
    $("#fecha1").datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',


    });
});

$(function() {
    $("#fecha2").datepicker({
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',

    });
});

$("#restar").click(function() {
    fechaInicio = moment($("#fecha1").val(), 'DD-MM-YYYY');
    // alert(fechaInicio)
    fechaInicioM = moment(fechaInicio, "DD-MM-YYYY").valueOf();
    fechaFin = moment($("#fecha2").val(), 'DD-MM-YYYY');
    fechaFinM = moment(fechaFin, "DD-MM-YYYY").valueOf();
    var diaEnMils = 1000 * 60 * 60 * 24;
    var resultado = Math.trunc((fechaInicioM - fechaFinM) / diaEnMils);
    var diasHastaFinAno

    if (isNaN(fechaInicioM) || isNaN(fechaFin)) {
        alert('No ha ingresado alguna de las fechas')
    } else {
        if (resultado > 0) {
            mensaje = 'La fecha 1 es mayor';
            diasHastaFinAno = Math.abs(Math.trunc((finAno.getTime() - fechaInicioM) / diaEnMils));
        } else {
            if (resultado == 0) {
                mensaje = "Las fechas son iguales";
                diasHastaFinAno = Math.abs(Math.trunc((finAno.getTime() - fechaInicioM) / diaEnMils));
            } else {
                mensaje = "La fecha 2 es mayor";
                diasHastaFinAno = Math.abs(Math.trunc((finAno.getTime() - fechaFinM) / diaEnMils));
            }
        }
        $("#contenedor").html('Entre las dos fechas hay ' + Math.abs(resultado) + ' días.' + "<br>" + mensaje);
        $("#contenedor").append(("<br>" + 'Faltan ' + diasHastaFinAno + ' dias hasta fin de año desde la fecha mayor'));

    }


});