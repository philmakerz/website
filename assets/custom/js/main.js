jQuery(document).ready(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $(".mainmenu .navbar-collapse").removeClass("in");
    });

    /*WoW js Active
     =================*/
    new WOW().init({
        mobile: true,
    });
    /* list_screen_slide Active
    =============================*/
    $('.bg-slide').owlCarousel({
        loop: true,
        nav: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
    /* list_screen_slide Active
    =============================*/
    $('.list_screen_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });


    /* single_screen_slide Active
    =============================*/
    var single_screen_slide = $('.single_screen_slide');
    single_screen_slide.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        items: 1,
    });
    //home_text_slide
    var home_text_slide = $('.home_text_slide');
    home_text_slide.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        items: 1,
    });
    $('.home_screen_nav .testi_next').on('click', function () {
        single_screen_slide.trigger('next.owl.carousel');
    });
    $('.home_screen_nav .testi_prev').on('click', function () {
        single_screen_slide.trigger('prev.owl.carousel');
    });

    single_screen_slide.on('translate.owl.carousel', function (property) {
        $('.home_screen_slide_main .owl-dot:eq(' + property.page.index + ')').click();
    });
    home_text_slide.on('translate.owl.carousel', function (property) {
        $('.home_screen_slide .owl-dot:eq(' + property.page.index + ')').click();
    });


    var client_photo2 = $('.client_details');
    client_photo2.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    // Book List Slider
    var client_photo = $('.client_photo');
    client_photo.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.client_nav .testi_next').on('click', function () {
        client_photo.trigger('next.owl.carousel');
    });
    $('.client_nav .testi_prev').on('click', function () {
        client_photo.trigger('prev.owl.carousel');
    });

    client_photo.on('translate.owl.carousel', function (property) {
        $('.client-details-content .owl-dot:eq(' + property.page.index + ')').click();
    });
    client_photo2.on('translate.owl.carousel', function (property) {
        $('.client-photo-list .owl-dot:eq(' + property.page.index + ')').click();
    });
    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form input, .subscrie-form button').fadeOut();
            }
        }
    });
    $('.price-table').on('mouseenter', function () {
        $('.price-table').removeClass('active');
        $(this).addClass('active');
    });
    $('.price-table').on('mouseleave', function () {
        $('.price-table').removeClass('active');
        $('.price-table.center').addClass('active');
    });

    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style>' +
                '<div class="mfp-iframe-scaler" >' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div></div>'
        }
    });
    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    $('.work-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    // jQuery Ripples
    if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }
    /* Instagram-jQuery */
    jQuery.fn.spectragram.accessData = {
        accessToken: '2136707.4dd19c1.d077b227b0474d80a5665236d2e90fcf',
        clientID: '4dd19c1f5c7745a2bca7b4b3524124d0'
    };

    $('.instagram').spectragram('getUserFeed', {
        query: 'adrianengine', //this gets adrianengine's photo feed
        size: 'small',
        max: 9,
    });
    $('.feature-area a').on('mouseenter', function () {
        $('.feature-area a').removeClass('active');
        $('.tab-pane').removeClass('active show');
        $(this).tab('show');
    });

}(jQuery));


/* Preloader Js
===================*/
jQuery(window).on("load", function () {
    $('.preloade').fadeOut(500);
    /* list_screen_slide Active
    =============================*/
    $('.instagram-slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });


});






/* ParticlesJS Config
===================*/

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
