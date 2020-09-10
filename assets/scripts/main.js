$(document).ready(function() {
    "use strict";
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

    // Google Map

    function initialize() {

        //replace this variable with the json you generate in the google maps api wizard tool
        //Styles Start
        var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 60 }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "on" }, { "lightness": 30 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ef8c25" }, { "lightness": 40 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#b6c54c" }, { "lightness": 40 }, { "saturation": -40 }] }, {}];
        //Styles End

        //Create a styled map using the above styles
        var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

        var mapProp = {
            center: new google.maps.LatLng($(".latitude").val(), $(".longitude").val()), //set the centre of the map. In my case it is the same as the position of the map pin.
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        //Set the map to use the styled map
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        //Create a marker pin to add to the map
        var marker;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng($(".latitude").val(), $(".longitude").val()), //set the position of the pin
            map: map,
            title: "",
            icon: "./assets/images/map-marker.png",
            animation: google.maps.Animation.BOUNCE
        });
    }

    if ($('#googleMap').length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    // Light Gallery
    $('.lightgallery').lightGallery({
        pager: false,
    });

    // Form Validation
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('contact-form');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);

    })();
});