function moneda(){
    this.nombre
    this.tipoDeCambio
    this.mensaje=[
        "No puede tranformar 0"
    ]

    this.convertir = function(monto){
        conversionresultado = monto * this.tipoDeCambio

        var mensajeHTML
        
        if(conversionresultado <=0){
            mensajeHTML = this.mensaje[0]
        }else{
            document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML
        }
        
    }
}

var yen = new moneda()
yen.nombre="yenes"  
yen.tipoDeCambio=6

var rupia = new moneda()
rupia.nombre="rupias"
rupia.tipodeCambio=10

var euro = new moneda()
euro.nombre="euros"
euro.tipoDeCambio=856

var naira = new moneda()
naira.nombre="nairas"
naira.tipoDeCambio=1,9

var sol = new moneda()
sol.nombre="soles"
sol.tipoDeCambio=223



function convertirMoneda(tipoDeMoneda) {
    var montoSeleccionado = document.getElementById('monto').value

    if(tipoDeMoneda == "yen"){
        yen.convertir(montoSeleccionado)
    }else if(tipoDeMoneda=="sol"){
        sol.convertir(montoSeleccionado)
    }else if(tipoDeMoneda =="naira"){
        naira.convertir(montoSeleccionado)
    }else if(tipoDeMoneda =="euro"){
        euro.convertir(montoSeleccionado)
    }else if(tipoDeMoneda =="rupia"){
        rupia.convertir(montoSeleccionado)
    }
} 