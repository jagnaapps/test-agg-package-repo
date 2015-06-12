var TeaserManager = (function () {

    var initAll = function() {
        $(".js-teaser").each(function() {
            Teaser.init($(this));
        });
    }

    return {
        initAll: initAll
    };

}());