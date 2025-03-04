// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active'); 
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });


});

//scroll to top button
// ----------- croll --------------//
(function ($) {
    //Scroll to Top
    function headerStyle() {
        if ($('.header').length) {
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 185) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    }
    headerStyle();
    // Scroll to Target
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    $(window).on('scroll', function () {
        headerStyle();
    });


})(window.jQuery);
$(".has-dropdown-1 .menu-link").click(function () {
    $(".product-dropdown").toggleClass("active");
});

// click language header
$( ".text-language p" ).on( "click", function() {
    $( ".text-language ul" ).toggle( "slow" );
});
$( ".language_mb" ).on( "click", function() {
    $( ".language_mb ul" ).toggle( "slow" );
});

// count number 

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//  fixed header 
$(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $(".menu_header").addClass("fixd-header");
    } else {
      $(".menu_header").removeClass("fixd-header");
    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".menu_mb").addClass("fixd-header-mobile");
    } else {
      $(".menu_mb").removeClass("fixd-header-mobile");
    }
});


new WOW().init();

$(".slider").owlCarousel({
    items: 1,
    responsive: {
        1200: { item: 1, },// breakpoint from 1200 up
        992: { items: 1, },
        768: { items: 1, },
        480: { items: 1, },
        0: { items: 1, }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000, //slide speed smooth
    dots: true,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
    margin: 30,
    //animateOut: ['fadeOut', 'zoomOut'], // default: false
    //animateIn: ['fadeIn', 'zoomIn'], // default: false
    center: false,
});

$(".slider-dt").owlCarousel({
    items: 5,
    responsive: {
        1200: { item: 5, },// breakpoint from 1200 up
        992: { items: 4, },
        768: { items: 3, },
        480: { items: 2, },
        0: { items: 2, }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000, //slide speed smooth
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    margin: 25,
    //animateOut: ['fadeOut', 'zoomOut'], // default: false
    //animateIn: ['fadeIn', 'zoomIn'], // default: false
    center: false,
});

$(".slider-chungchi").owlCarousel({
    items: 5,
    responsive: {
        1200: { item: 5, },// breakpoint from 1200 up
        992: { items: 4, },
        768: { items: 3, },
        480: { items: 2, },
        0: { items: 2, }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000, //slide speed smooth
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    margin: 25,
    //animateOut: ['fadeOut', 'zoomOut'], // default: false
    //animateIn: ['fadeIn', 'zoomIn'], // default: false
    center: false,
});


