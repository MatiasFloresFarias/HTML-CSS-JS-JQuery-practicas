const boton = document.getElementById('boton');
var numintentos = 0;
var maxintentos = 3;
var puntaje = 0;

boton.onclick = function () {
    numintentos += 1;

    if (numintentos === 3) {
        boton.disabled = true;
        alert('Accedió el máximo de intentos');
    } else {

        let preguntaUno = document.preguntas.preguntaUno.value;
        let preguntaDos = document.preguntas.preguntaDos.value;
        let preguntaTres = document.preguntas.preguntaTres.value;
        let preguntaCuatro = document.preguntas.preguntaCuatro.value;
        let preguntaCinco = document.preguntas.preguntaCinco.value;

        console.log(preguntaUno);
        console.log(preguntaDos);
        console.log(preguntaTres);
        console.log(preguntaCuatro);
        console.log(preguntaCinco);

        if (preguntaUno == '' || preguntaDos == '' || preguntaTres == '' || preguntaCuatro == '' || preguntaCinco == '') {
            alert('Debe contestar todas las preguntas');
        } else {
            let puntaje = 0;

            if (preguntaUno === 'opcion-1-3') {
                puntaje += 1;
            }

            if (preguntaDos === 'opcion-2-4') {
                puntaje += 1;
            }

            if (preguntaTres === 'opcion-3-1') {
                puntaje += 1;
            }

            if (preguntaCuatro === 'opcion-4-4') {
                puntaje += 1;
            }

            if (preguntaCinco === 'opcion-5-2') {
                puntaje += 1;
            }

            if (puntaje === 5) {
                alert('Arbo campión');
            } else {
                alert('Algunas de sus respuestas son incorrectas, por favor, corríjalas');
            }
        }
    }
};








