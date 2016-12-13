$(document).ready(function() {
    $(".button-collapse").sideNav();
});
$(document).ready(function() {
    $('.parallax').parallax();
});
$(document).ready(function() {
    $('.collapsible').collapsible({
        accordion: false
    });
});

$(function() {
    $("#texttyped").typed({
        strings: ["a high school student.", "a hacker.", "an award-winning artist.", "a programmer.", "a painter.", "a photographer.", "a web designer.", "a robotics programming lead.", "a kungfu/wushu black belt.", "an AR and VR enthusiast.", "a cryptography enthusiast.", "a hooman."],
        typeSpeed: 20,
        loop: true
    });
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('a.end-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + $($anchor.attr('href')).outerHeight(true) - $(window).height()
        }, 1300, 'easeInOutExpo');
        event.preventDefault();
    });
});