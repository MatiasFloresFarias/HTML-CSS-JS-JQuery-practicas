$('canvas').drawArc({
    draggable: true,
    fillStyle: 'green',
    name: 'circulo',
    layer: true,
    radius: 50,
    x: 100,
    y: 100,

    mouseover: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: colorRandom()
        }, 300);
    },
    mouseout: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: 'green'
        }, 300);
    }
});

$('canvas').drawRect({
    draggable: true,
    fillStyle: 'blue',
    name: 'rectangulo',
    layer: true,
    width: 100,
    height: 80,
    x: 300,
    y: 300,

    mouseover: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: colorRandom()
        }, 300);
    },
    mouseout: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: 'blue'
        }, 300);
    }
});

$('canvas').drawPolygon({
    draggable: true,
    fillStyle: 'red',
    name: 'triangulo',
    x: 200,
    y: 100,
    radius: 50,
    sides: 3,

    mouseover: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: colorRandom()
        }, 300);
    },
    mouseout: function(layer) {
        $(this).animateLayer(layer, {
            fillStyle: 'red'
        }, 300);
    }
});

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function colorRandom() {
    return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}