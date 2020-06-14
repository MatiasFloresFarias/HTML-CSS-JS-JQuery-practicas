var cont = 1

function mostrarSiguiente() {
    cont++
    switch (cont) {
        case 1:
            document.getElementById("foto").src = "https://st-listas.20minutos.es/images/2015-12/404937/list_640px.jpg?1449677401"
            break;
        case 2:
            document.getElementById("foto").src = "https://i0.wp.com/www.lafosadelrancor.com/wp-content/uploads/2014/07/star-wars-los-mejores-personajes-de-la-saga_5w74-1.jpg?fit=1536%2C1056&ssl=1"
            break;
        case 3:
            document.getElementById("foto").src = "https://starwarsblog.starwars.com/wp-content/uploads/2017/05/ANH-Leia-little-short.jpg"
            break;
        case 4:
            document.getElementById("foto").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUyuiUVu16j6jg5E6BfZjNjOVz4UIDU14sEPNhLVOzYK1YjZNJ&usqp=CAU"
            break;
        case 5:
            document.getElementById("foto").src = "https://img.europapress.es/fotoweb/fotonoticia_20191003105742_1200.jpg"
            break;
        default:
            alert("ultima foto")
            cont--
            break;
    }
}

function mostrarAnterior() {
    cont--
    switch (cont) {
        case 1:
            document.getElementById("foto").src = "https://st-listas.20minutos.es/images/2015-12/404937/list_640px.jpg?1449677401"
            break;
        case 2:
            document.getElementById("foto").src = "https://i0.wp.com/www.lafosadelrancor.com/wp-content/uploads/2014/07/star-wars-los-mejores-personajes-de-la-saga_5w74-1.jpg?fit=1536%2C1056&ssl=1"
            break;
        case 3:
            document.getElementById("foto").src = "https://starwarsblog.starwars.com/wp-content/uploads/2017/05/ANH-Leia-little-short.jpg"
            break;
        case 4:
            document.getElementById("foto").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUyuiUVu16j6jg5E6BfZjNjOVz4UIDU14sEPNhLVOzYK1YjZNJ&usqp=CAU"
            break;
        case 5:
            document.getElementById("foto").src = "https://img.europapress.es/fotoweb/fotonoticia_20191003105742_1200.jpg"
            break;
        default:
            alert(" solo puede moverse hacia adelante")
            cont++
            break;
    }
}

function azar() {
    //si llega a salir la misma foto q se esta viendo al momento de apretar azar se muestra la siguiente, a menos de q este parado en la foto 5 en ese caso se muestra la 4
    num = Math.round(Math.random() * 4) + 1
    if (num == cont && num < 5) {
        cont++
    } else {
        if (num == cont && num == 5) {
            cont--
        } else {
            cont = num
        }
    }


    switch (cont) {
        case 1:
            document.getElementById("foto").src = "https://st-listas.20minutos.es/images/2015-12/404937/list_640px.jpg?1449677401"
            break;
        case 2:
            document.getElementById("foto").src = "https://i0.wp.com/www.lafosadelrancor.com/wp-content/uploads/2014/07/star-wars-los-mejores-personajes-de-la-saga_5w74-1.jpg?fit=1536%2C1056&ssl=1"
            break;
        case 3:
            document.getElementById("foto").src = "https://starwarsblog.starwars.com/wp-content/uploads/2017/05/ANH-Leia-little-short.jpg"
            break;
        case 4:
            document.getElementById("foto").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUyuiUVu16j6jg5E6BfZjNjOVz4UIDU14sEPNhLVOzYK1YjZNJ&usqp=CAU"
            break;
        case 5:
            document.getElementById("foto").src = "https://img.europapress.es/fotoweb/fotonoticia_20191003105742_1200.jpg"
            break;
    }
}