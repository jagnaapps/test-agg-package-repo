var Teaser = (function ()
{
    var init = function($elem) {
        $elem.append('<div class="teaser__icon"></div>');
        $elem.prepend('<div class="teaser__icon"></div>');
    }

    return {
        init: init
    };

}());