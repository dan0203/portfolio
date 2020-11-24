$(document).ready(function(){
    // Image slider
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

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    // Pie Chart
    // Start chart animation when section shows on scroll
    var skillsTopOffset = $(".skillSection").offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    // Count up ?
});