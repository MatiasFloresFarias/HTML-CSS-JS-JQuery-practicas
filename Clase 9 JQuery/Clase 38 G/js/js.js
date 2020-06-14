
$(function(){
    $("#formulario").validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 30
            },
            marca:{
                required: true,
                minlength: 5, 
                maxlength:20
            }, 
            stock:{
                required: true, 
                minlength: 0, 
                maxlength:1000
            },
            estado:{
                required: true
            },
            color:{
                required: true,
                maxlength:20,
               

            }
        },
        messages:{
            nombre:{
                required:' No ha registrado un nombre',
                maxlength:'Caracteres maximos permitidos 30'
            },
            marca:{
                required:' No ha registrado una marca',
                minlength:'Caracteres minimos permitidos 5',
                maxlength:'Caracteres maximos permitidos 20'
            },
            stock:{
                required:' No ha registrado un stock',
                minlength:'Solo se puede agregar 1 o mas productos',
                maxlength:'Solo se puede agregar 1000 o menos productos'
            },
            estado:{
                required:' No ha registrado un estado'
            },
            color:{
                required:' No ha registrado un Color',
                maxlength:'Caracteres maximos permitidos 20'
                

            }
            

        }

    })
})

