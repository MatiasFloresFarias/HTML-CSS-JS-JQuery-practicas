$(function () {
    $(".dial").knob({
        'change': function () {
            var color_rgb = 'rgb(' + $('#r').val() + ',' + $('#g').val() + ',' + $('#b').val() + ')';
            $('#color').css('background-color', color_rgb);
        }
    });
});


