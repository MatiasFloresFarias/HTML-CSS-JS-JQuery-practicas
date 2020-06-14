var cantidadN = 20;
var listNum;
var listaNumeros = [];

$(document).ready(function() {
    $('#Btn2').attr("disabled", true);
    $('#Btn3').attr("disabled", true);
    $('#Btn4').attr("disabled", true);
    $('#Btn5').attr("disabled", true);
})

$("#Btn1").click(function() {
    for (index = 0; index < 20; index++) {
        valor = Math.random() * 100 + 1;
        listaNumeros[index] = Math.round(valor)
    }
    $("#contenedor").html(listaNumeros.join(' '))

    $('#Btn2').attr("disabled", false);
    $('#Btn3').attr("disabled", false);
    $('#Btn4').attr("disabled", false);
    $('#Btn5').attr("disabled", false);

})


$("#Btn2").click(function() {

    var impar = [];

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 != 0) {
            impar[i] = listaNumeros[i]
        }

    }
    $("#contenedor").html(impar.join(' '))
})


$("#Btn3").click(function() {

    var par = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 == 0) {
            par[i] = listaNumeros[i]
        }

    }

    $("#contenedor").html(par.join(' '))
})

$("#Btn4").click(function() {
    var primo = [];


    for (let i = 0; i < listaNumeros.length; i++) {
        cont = 0
        for (let j = 1; j < 100; j++) {
            if (listaNumeros[i] % j == 0) {
                cont++
                // alert(cont)
            }
        }
        if (cont == 2) {
            primo[i] = listaNumeros[i];

        }
    }

    $("#contenedor").html(primo.join(' '))



})

$("#Btn5").click(function() {
    var compuesto = [];


    for (let i = 0; i < listaNumeros.length; i++) {
        cont = 0
        for (let j = 1; j < 100; j++) {
            if (listaNumeros[i] % j == 0) {
                cont++
                // alert(cont)
            }
        }
        if (cont != 2) {
            compuesto[i] = listaNumeros[i];

        }
    }

    $("#contenedor").html(compuesto.join(' '))


})