$("#datatable").tableExport();

$(document).ready(function() {
    $('#datatable').DataTable();
});

$(function() {

    $.validator.addMethod("letrasNumeros", function(value, element) {
        return this.optional(element) || /^[a-z0-9]+$/i.test(value);
    }, "product name must contain only letters, numbers.");

    $.validator.addMethod("mayusculasyMinusculas", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
    }, "color must contain only letters");

    $("#formulario").validate({
        errorClass: "error",
        rules: {
            nombre: {
                required: true,
                maxlength: 30,
                letrasNumeros: true
            },
            apellido: {
                required: true,
                maxlength: 50,
                letrasNumeros: true
            },
            correo: {
                required: true,
                email: true,
                maxlength: 50
            },
            edad: {
                required: true,
                minlength: 0,
                maxlength: 150,
                digits: true

            },
            telefono: {
                required: true,
                maxlength: 12
            }
        },
        messages: {
            nombre: {
                required: ' No ha registrado un nombre',
                maxlength: 'Caracteres maximos permitidos 30',
                letrasNumeros: 'Solo se pueden ingresar letras numeros'
            },
            apellido: {
                required: ' No ha registrado una apellido',
                maxlength: 'Caracteres maximos permitidos 50',
                letrasNumeros: 'Solo se pueden ingresar letras numeros'
            },
            correo: {
                required: ' No ha registrado un correo',
                maxlength: 'Caracteres maximos permitidos 50'
            },
            edad: {
                required: ' No ha registrado su edad',
                minlength: 'Su edad debe ser 0 o mas',
                maxlength: 'Su edad no puede ser mayor a 150',
                digits: 'debe ingresar numeros enteros'
            },
            telefono: {
                required: ' No ha registrado un telefono',
                maxlength: 'Su telefono debe tener un largo de 12 maximo',
            }
        }
    })
});

////////////////////////////////////////////////////////



$("#enviar").click(function() {
    nombre = $('#nombre').val();
    apellido = $('#apellido').val();
    correo = $('#correo').val();
    edad = $('#edad').val();
    telefono = $('#telefono').val();

    var _tr = '<tr class="child"><td>' + nombre + '</td><td>' + apellido + '</td><td>' + correo + '</td><td>' + edad + '</td><td>' + telefono + '</td></tr>';

    $("#tbody").append(_tr);

    $("#datatable").tableExport().reset();


});

$('#enviar').on('click', function() {
    $('#datatable').DataTable().row.add([
        nombre,
        apellido,
        correo,
        edad,
        telefono
    ]).draw(false);
});