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

    // Count up
    // Start count animation when section shows on scroll
    var countUpFinished = false;
    var statsTopOffset = $(".statsSection").offset().top;
    
    $(window).scroll(function () {
        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            document.querySelectorAll('.counter').forEach(function(element){
                var endVal = parseInt(element.textContent);
                var numAnim = new countUp.CountUp(element, endVal);
                numAnim.start();
            });

            countUpFinished = true;
        }
    });

    // Fancy box
    $("[data-fancybox]").fancybox();

    // Isotope
    // On page load
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    // On click of a filter
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

});