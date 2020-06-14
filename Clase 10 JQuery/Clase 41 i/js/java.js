(function($) {
    "use strict";

    var controller = new slidebars();
    controller.init();

    // left Slidebar controls
    $('.js-toggle-left').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('left-slidebar');
    });

    // Close 
    $(controller.events).on('opened', function() {
        $('[canvas="container"]').addClass('js-close-any-slidebar');
    });

    $(controller.events).on('closed', function() {
        $('[canvas="container"]').removeClass('js-close-any-slidebar');
    });

    $('body').on('click', '.js-close-any-slidebar', function(event) {
        event.stopPropagation();
        controller.close();
    });

})(jQuery);