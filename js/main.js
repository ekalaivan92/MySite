(function ($) {
    "use strict";

    const home = document.getElementById('home');
    const headerHeight = home.clientHeight;
    console.log(headerHeight);
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > (headerHeight + 94)) {
            $("#mainNav").removeClass("bg-light-50 navbar-dark");
            $("#mainNav").addClass("bg-light navbar-light");
            $("#home-header").removeClass("header-text-color");
        }
        else { 
            $("#mainNav").removeClass("bg-light navbar-light");
            $("#mainNav").addClass("bg-light-50 navbar-dark");
            $("#home-header").addClass("header-text-color");
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 82
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    $('.scroll-to-bottom').click(function () {
        $('html, body').animate({ scrollTop: $(document).height() }, 1500, 'easeInOutExpo');
        return false;
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    //Show Menu
    $("#menuButton").on('click', function (event) {
        if ($("#navbarCollapse").hasClass("collapse")) {
            $("#navbarCollapse").removeClass("collapse");
        }
        else { 
            $("#navbarCollapse").addClass("collapse");
        }
    });

    //Hide Menu
    $(".nav-item").on('click', function (event) { 
        $("#navbarCollapse").addClass("collapse");
    })

})(jQuery);

