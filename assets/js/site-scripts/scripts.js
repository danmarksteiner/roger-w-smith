// Defining breakpoints - Add extra ones if required
// Phone only
var phoneMax = window.matchMedia("(max-width: 767px)");
// Tablet and up
var tabletMin = window.matchMedia("(min-width: 768px)");
var tabletMax = window.matchMedia("(max-width: 1024px)");
// Desktop and up
var deskUp = window.matchMedia("(min-width: 1540px)");
// Only apply to devices
var devices = window.matchMedia("(max-width: 1024px)");

$(window).on('load', function () {
    setTimeout(function(){
        $('.body-wrapper').removeClass('fade-out');
    }, 250);
});

//Equal heights function
var equalHeights = function(selectors) {
    var heights = tHeight = 0;
    $(selectors).each(function() {
        $(this).height('auto');
        tHeight = $(this).height();
        if (tHeight >= heights) {
            heights = tHeight;
        }
    }).height(heights);
}

//  window.addEventListener('orientationchange', function () {
//     var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
//     document.body.style.display='none';
//     setTimeout(function () {
//       document.body.style.display = originalBodyStyle;
//     }, 10);
//   });

//Smooth Scroll Function for #
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
            	if (devices.matches) {
	                $('html, body').animate({
	                scrollTop: target.offset().top - 53
	                }, 1000);
	                return false;
	            }

	            else {
	            	$('html, body').animate({
	                scrollTop: target.offset().top - 0
	                }, 1000);
	                return false;
	            }
            }
        }
    });
});

//Document Ready Scripts
$(document).ready(function() {

    //Main Navigation Show/Hide
    $("#mobileMenuBtn").on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $("#mainNavigation").toggleClass('open');
        $("body").toggleClass('nav-open');
    });

    //Main Navigation Show/Hide
    $("#pageScroller").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#quote").offset().top
        }, 1000);
    });

    // Sticky header function
    $(function() {
        //caches a jQuery object containing the header element
        var header = $("body");
        $(window).scroll(function() {
            //Find scroll position of the page
            var scroll = $(window).scrollTop();
            //If scrolled past 100px
            if (scroll >= 200) {
                header.addClass("nav-scrolled");
            } else {
                header.removeClass("nav-scrolled");
            }
        });
    });

    //Fix Footer on scroll to bottom of page
    $(function() {
        var body = document.body,
        html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    });

    // Spotlight Masterslider
    var el  = document.getElementById('masterslider');
    var elTimeline  = document.getElementById('mastersliderTimeline');
    var elTimelineMobile  = document.getElementById('mastersliderTimelineMobile');
    $("html, body, #bodyWrapper").css({
        height: $(window).height()
    });
    // If statement for calling slider only on pages with it
    if(el){
        $(function() {
            var slider = new MasterSlider();
            slider.setup('masterslider' , {
                width:1920,    // slider standard width
                height:1080,   // slider standard height
                layout: 'fullscreen',
                dir: 'v',
                preload: 0,
                view:"parallaxMask",
                control:"arrow",
                space:0,
                grabCursor:true,
                swipe:false,
                speed:10,
                parallaxMode:"mouse",
                hideLayers:false,
                instantStartLayers: true,
                // start: 20,
            });
            slider.control('bullets' , {autohide:false  , dir:"v", align:"bottom"});
            // adds Arrows navigation control to the slider.
            slider.control('arrows' , {autohide:false});
            // var slider_instance = $('#masterslider').masterslider('slider');
            slider.api.addEventListener(MSSliderEvent.INIT , function(){
                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function(){
                    var onLastSlide   = slider.api.index() == slider.api.count() - 1
                    /**
                     * If the slider moves onto the last slide, 
                       we add a page scroller to scroll down to 
                       rest of page content
                     */
                    if ( onLastSlide ) {
                        $('#pageScroller').show();
                    } else {
                        $('#pageScroller').hide();
                    }
                    /**
                     * If the slider moves onto the first slide, 
                       the arrow up is removed as it isn't needed.
                     */
                    var onFirstSlide   = slider.api.index()
                    if ( onFirstSlide == 0){
                        $(".master-slider .ms-nav-prev").hide();
                    }else {
                        $(".master-slider .ms-nav-prev").show();
                    }
                })
            });

            /* Parallax config for layers */
            MSScrollParallax.setup(slider, 10, 80, true);

        });
    }

    if(elTimeline){
        $(function() {
            var slider = new MasterSlider();
            slider.setup('mastersliderTimeline' , {
                width:1920,    // slider standard width
                height:1080,   // slider standard height
                layout: 'fullscreen',
                dir: 'v',
                preload: 0,
                view:"parallaxMask",
                control:"arrow",
                space:0,
                grabCursor:true,
                swipe:false,
                speed:10,
                wheel:true,
                parallaxMode:"mouse",
                hideLayers:false,
                instantStartLayers: true,
                start: 43,
            });
            slider.control('bullets' , {autohide:false  , dir:"v", align:"bottom"});
            // adds Arrows navigation control to the slider.
            slider.control('arrows' , {autohide:false});
            // var slider_instance = $('#masterslider').masterslider('slider');
            slider.api.addEventListener(MSSliderEvent.INIT , function(){
                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function(){
                    var onLastSlide   = slider.api.index() == slider.api.count() - 1
                    /**
                     * If the slider moves onto the last slide, 
                       we add a page scroller to scroll down to 
                       rest of page content
                     */
                    if ( onLastSlide ) {
                        $('#pageScroller').show();
                    } else {
                        $('#pageScroller').hide();
                    }
                    /**
                     * If the slider moves onto the first slide, 
                       the arrow up is removed as it isn't needed.
                     */
                    var onFirstSlide   = slider.api.index()
                    if ( onFirstSlide == 0){
                        $(".master-slider .ms-nav-prev").hide();
                    }else {
                        $(".master-slider .ms-nav-prev").show();
                    }
                })
            });
            slider.api.addEventListener(MSSliderEvent.INIT , function(){
                slider.api.addEventListener(MSSliderEvent.RESIZE, function(){
                    slider.api.destroy();
                })
            });

            /* Parallax config for layers */
            MSScrollParallax.setup(slider, 10, 80, true);

        });
    }

    if(elTimelineMobile){
        $(function() {
            var slider = new MasterSlider();
            slider.setup('mastersliderTimelineMobile' , {
                width:1920,    // slider standard width
                height:1080,   // slider standard height
                layout: 'fullscreen',
                dir: 'v',
                preload: 0,
                view:"parallaxMask",
                control:"arrow",
                space:0,
                grabCursor:true,
                swipe:true,
                speed:10,
                wheel:false,
                parallaxMode:"mouse",
                hideLayers:false,
                instantStartLayers: true,
                start: 43,
            });
            slider.control('bullets' , {autohide:false  , dir:"v", align:"bottom"});
            // adds Arrows navigation control to the slider.
            slider.control('arrows' , {autohide:false});
            // var slider_instance = $('#masterslider').masterslider('slider');
            slider.api.addEventListener(MSSliderEvent.INIT , function(){
                slider.api.addEventListener(MSSliderEvent.CHANGE_START, function(){
                    var onLastSlide   = slider.api.index() == slider.api.count() - 1
                    /**
                     * If the slider moves onto the last slide, 
                       we add a page scroller to scroll down to 
                       rest of page content
                     */
                    if ( onLastSlide ) {
                        $('#pageScroller').show();
                    } else {
                        $('#pageScroller').hide();
                    }
                    /**
                     * If the slider moves onto the first slide, 
                       the arrow up is removed as it isn't needed.
                     */
                    var onFirstSlide   = slider.api.index()
                    if ( onFirstSlide == 0){
                        $(".master-slider .ms-nav-prev").hide();
                    }else {
                        $(".master-slider .ms-nav-prev").show();
                    }
                })
            });

            /* Parallax config for layers */
            MSScrollParallax.setup(slider, 10, 80, true);
            $( window ).on( "orientationchange", function( event ) {
                window.location.reload();
            });
        });
    }


    // Product Masterslider
    var watchSliderEl  = document.getElementById('watchSlider');
    // If statement for calling slider only on pages with it
    if(watchSliderEl){
        $(function() {
            var watchSlider = new MasterSlider();
            watchSlider.setup('watchSlider' , {
                width:1920,    // slider standard width
                height:1080,   // slider standard height
                dir: 'h',
                preload: 0,
                view:"fade",
                control:"arrow",
                space:0,
                grabCursor:true,
                speed:5,
                hideLayers:false,
                instantStartLayers: true,
                autoplay: true,
                loop: true,
            });
            watchSlider.control('bullets' , {autohide:false  , dir:"h", align:"bottom"});
            // adds Arrows navigation control to the slider.
            watchSlider.control('arrows' , {autohide:false});
        });
    }

    // Product Masterslider
    var watchSliderSquareEl  = document.getElementById('watchSliderSquare');
    // If statement for calling slider only on pages with it
    if(watchSliderSquareEl){
        $(function() {
            var watchSlider = new MasterSlider();
            watchSlider.setup('watchSliderSquare' , {
                width:850,    // slider standard width
                height:728,   // slider standard height
                dir: 'h',
                preload: 0,
                view:"fade",
                control:"arrow",
                space:0,
                grabCursor:true,
                speed:5,
                hideLayers:false,
                instantStartLayers: true,
                autoplay: true,
                loop: true,
            });
            watchSlider.control('bullets' , {autohide:false  , dir:"h", align:"bottom"});
            // adds Arrows navigation control to the slider.
            watchSlider.control('arrows' , {autohide:false});
        });
    }

    // Series 1 slider
    var seriesOneSliderEl  = document.getElementById('seriesOneSlider');
    // If statement for calling slider only on pages with it
    if(seriesOneSliderEl){
        $(function() {
            var watchSlider = new MasterSlider();
            watchSlider.setup('seriesOneSlider' , {
                width:830,    // slider standard width
                height:1197,   // slider standard height
                dir: 'h',
                preload: 0,
                view:"fade",
                control:"arrow",
                space:0,
                grabCursor:true,
                speed:5,
                hideLayers:false,
                instantStartLayers: true,
                autoplay: true,
                loop: true,
            });
            watchSlider.control('bullets' , {autohide:false  , dir:"h", align:"bottom"});
            // adds Arrows navigation control to the slider.
            watchSlider.control('arrows' , {autohide:false});
        });
    }

    // Series 2 slider
    var seriesOneSliderEl  = document.getElementById('seriesTwoSlider');
    // If statement for calling slider only on pages with it
    if(seriesOneSliderEl){
        $(function() {
            var watchSlider = new MasterSlider();
            watchSlider.setup('seriesTwoSlider' , {
                width:830,    // slider standard width
                height:830,   // slider standard height
                dir: 'h',
                preload: 0,
                view:"fade",
                control:"arrow",
                space:0,
                grabCursor:true,
                speed:5,
                hideLayers:false,
                instantStartLayers: true,
                autoplay: true,
                loop: true,
            });
            watchSlider.control('bullets' , {autohide:false  , dir:"h", align:"bottom"});
            // adds Arrows navigation control to the slider.
            watchSlider.control('arrows' , {autohide:false});
        });
    }

    // Gallery Select
    $(function() {
        var title = $('.gallery-title');

        $('.galleryClose').hide();

        title.click(function() {
            var clicked = $(this);
            var gallery = clicked.next('.gallery');
            var titleArrow = $('.icon-arrow');

            titleArrow.removeClass('arrow-rotate');
            clicked.find('.icon-arrow').addClass('arrow-rotate');

            if (gallery.hasClass('open')) {
                $('.gallery').slideUp(750).removeClass('open');
                clicked.find('.icon-arrow').removeClass('arrow-rotate');
            }

            else {
                $('.gallery').slideUp(750).removeClass('open');
                gallery.addClass('open').slideToggle(750, function() {
                    $('html, body').animate({
                        scrollTop: $(clicked).offset().top
                    }, 500);
                });
                

            }
        });
    });

    // Initialise Gallery Lightbox
    $(function() {
        $('.gallery.lightBox').each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
                }
            });
        });
    });

    //Form Submit Handler
    $(function() {
        // Get the form.
        var form = $('#contactForm');
        // Get the messages div.
        // var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            }).done(function(response) {
                // Clear the form.
                $('#title').val('');
                $('#firstName').val('');
                $('#lastName').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#country').val('');
                $('#message').val('');
                // similar behavior as an HTTP redirect
                window.location.replace("http://rwsmithwatches.com/contact/thanks.php");
            }).fail(function(data) {
                // if the form fails to send
                window.location.replace("http://rwsmithwatches.com/contact/fail.php");
            });
        });

        //JQuery validate for old IE - Material design lite uses pattern attribute which has limited support in legacy IE.
        if ($('.lt-ie10').length > 0) {
            console.log("IE present");
            $("#contactForm").validate({
                rules: {
                    title: "required",
                    firstName: "required",
                    lastName: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        digits: true,
                    },
                    country: "required",
                    message: "required"
                },
                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    email: "Please enter a valid email address",
                    phone: "Please enter a valid phone number",
                    country: "Please enter a country",
                    message: "Please enter a message"
                }
            });
        }
    });

    //Hide form submit until all required fields are filled out
    //Sourced from - http://stackoverflow.com/questions/5614399/disabling-submit-button-until-all-fields-have-values 
    (function() {
        // Checks form field on keyup
        $('.mdl-textfield__input').keyup(function() {

            var empty = false;
            $('.mdl-textfield__input').each(function() {
                if ($(this).val() == '') {
                    empty = true;
                }
            });
            //If any required field is empty submit will be disabled
            if (empty) {
                $('#contactSubmit').attr('disabled', 'disabled');
            //Show Submit
            } else {
                $('#contactSubmit').removeAttr('disabled');
            }
        });
    })()

});

//Window Load Scripts
$(window).load(function(){
    //Equal Heights
    if (tabletMin.matches) {
        equalHeights($('.quote-col'));
    }
	if (deskUp.matches) {
        equalHeights($('.teaser-col'));
        equalHeights($('.product-roger-col'));
        equalHeights($('.ethos-desktop .col'));
    }
    //Hides Parallax footer to not interfere with slider - Waits 1 second after initial slider load
    setInterval(function() {
        $(".footer-links").fadeIn();
        if (phoneMax.matches) {
            $(".mobile-only").fadeIn();
        }
    }, 1000);
});
//Resize Scripts
$(window).resize(function() {
    //Equal Heights
    if (tabletMin.matches) {
        equalHeights($('.quote-col'));
    }
	if (deskUp.matches) {
        equalHeights($('.teaser-col'));
        equalHeights($('.ethos-desktop .col'));
        equalHeights($('.product-roger-col'));
	}
});

//Scroll Scripts
// Hide Header on on scroll down
if (deskUp.matches) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    var body = document.body,
        html = document.documentElement,
        height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#mainNavigation').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#mainNavigation').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
}