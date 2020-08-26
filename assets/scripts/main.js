$(document).ready(function() {

    // Open Search
    $('.header-search-toggle').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            $body = $('body');

        $body.toggleClass('show-search overflow-hidden');
    });

    // Back To Top animation
    var $backToTop = $(".back-to-top");
    $backToTop.hide();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.on('click', function(e) {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    // Adding Class on Scroll
    $(window).on('load', function() {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 1) {
            $('body').addClass('nav-fixed');
        }
    });
    $(window).scroll(function() {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 1) {
            $('body').addClass('nav-fixed');
        } else {
            $('body').removeClass('nav-fixed');
        }
    });

    // Menu
    $('.nav-icon-container').on('click', function() {
        $('body').addClass('menu-open');
        $('li').removeClass('menu-expand');
    });
    $('.close-icon-container').on('click', function() {
        $('body').removeClass('menu-open');
        $('li').removeClass('menu-expand');
    });
    $('.fa-arrow-right').on('click', function() {
        $(this).parent('li').siblings().removeClass('menu-expand');
        $(this).parent('li').toggleClass('menu-expand');
    });

    // // Cases animation
    // AOS.init({
    //     duration: 1000
    // });

    // $(".jarallax").each(function (e, n) {
    //     var speed = $(n).data("speed") || 0.85;
    //     $(n).jarallax({
    //         speed: speed,
    //         automaticResize: true,
    //         onInit: function () {
    //             $(n).show();
    //         }
    //     });
    // });

    // // Custom Category Filter
    // if (!(/Trident\/|MSIE/.test(window.navigator.userAgent)) && $('.filter').length) {
    //     var filterSingle = $('.filter').filterizr({
    //         setupControls: false,
    //         animationDuration: 0.3
    //     });
    //     $('.filter-nav li').click(function () {
    //         $('.filter-nav li').removeClass('active');
    //         $(this).addClass('active');
    //         var filter = $(this).data('fltr');
    //     });
    // }

});