$(document).ready(function () {
    StyleController.init();
});

var StyleController = {
    init: function () {
        console.log('Running jquery/javascript');
    },
};

$(window).scroll(function () {
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();

    //Iterate through all node
    $('.collapse > ul > .nav-item > a').each(function () {
        var curLink = $(this);
        var refElem = $(curLink.attr('href'));

        //Compare the value of current position and the every section position in each scroll
        if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
            //Remove class active in all nav
            $('#top-nav > ul > li').removeClass("active");
            //Add class active
            curLink.parent().addClass("active");
        }
        else {
            curLink.parent().removeClass("active");
        }
    });
});