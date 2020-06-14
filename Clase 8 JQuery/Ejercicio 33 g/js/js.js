var cuadrado = $("#cuadrado"); //getElementById
var movimiento = 10;
var margTop = 0;
var margLeft = 0;


$("#derecha").click(function() {
    margLeft += movimiento;

    var ml = cuadrado.css("margin-left");
    var mlInt = parseInt(ml)

    if (mlInt + movimiento <= 650) {
        cuadrado.css("margin-left", margLeft + "px")
    } else {
        alert("No puedes salirte de los bordes")
    }
})



$("#izquierda").click(function() {
    margLeft -= movimiento;

    var ml = cuadrado.css("margin-left");
    var mlInt = parseInt(ml)

    if (mlInt - movimiento >= 0) {
        cuadrado.css("margin-left", margLeft + "px")
    } else {
        alert("No puedes salirte de los bordes")
    }

})


$("#abajo").click(function() {
    margTop += movimiento;
    var mt = cuadrado.css("margin-top");
    var mtInt = parseInt(mt)
    if (mtInt + movimiento <= 650) {
        cuadrado.css("margin-top", margTop + "px")
    } else {
        alert("No puedes salirte de los bordes")
    }
})


$("#arriba").click(function() {
    margTop -= movimiento;
    var mt = cuadrado.css("margin-top");
    var mtInt = parseInt(mt)

    if (mtInt - movimiento >= 0) {
        cuadrado.css("margin-top", margTop + "px")
    } else {
        alert("No puedes salirte de los bordes")
    }
})



$("#reset").click(function() {
    margLeft = 0;
    margTop = 0;
    cuadrado.css("margin-top", margTop + "px")
        .css("margin-left", margLeft + "px")
})