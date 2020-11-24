$(document).ready(function(){
    // Image slider settings
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    // Typed
    var typed = new Typed(".typed", {
        strings: ["Développeur Web.", "Programmeur."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});