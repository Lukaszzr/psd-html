let navbar = $('.navbar');

$(window).scroll(function () {
    let iTop = $('.section-destination').offset().top;
    if ($(window).scrollTop() > iTop) {
        navbar.addClass('sticky');
    } else {
        navbar.removeClass('sticky');
    }
});

