// Site Pre-Loader
// makes sure the whole site is loaded
$(window).on('load', function() {
  // will first fade out the loading animation
    $("#status").fadeOut();
  // will fade out the whole DIV that covers the website.
    $("#preloader").delay(1000).fadeOut("slow");
    

    /***            3D Slider            ***/
    /**************************************/
    $('#testimonials').mousewheel(function(event, delta) {
       event.preventDefault();
        if (delta < 0 ){
             $("#nextpage, #test").trigger("click");
        }
        else if (delta > 0){
             $("#prevpage").trigger("click");
        }
    });
});

$(document).ready( function(){ 
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 815,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    // wowAnimations
        wow = new WOW({
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
        })
        wow.init();

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : 
        $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
    $(window).on('scroll', function(){
        var winScroll = $(this).scrollTop();
        if (winScroll > ($('.social-section').offset().top - ($(window).height()/1.2)) ) {
            $('.social-sec-animation img').each(function(i){
                setTimeout(function(){
                    $('.social-sec-animation img ').eq(i).addClass('is-visible');                
                    $('.social-sec-animation img ').eq(i+1).addClass('is-visible');                
                }, 100*(i+1));
            });

        }

    });

    $(document).on('click', '.collapse-switch', function(){
        $('.navigation-block ul.nav-links').slideToggle();
    });

});

// stickey header
$(window).on('load scroll resize',function(){ 
    var x = $(this).scrollTop(); 
    if (x > $('.header-section .code-block').height()) {
        $('.header-section').addClass('menu-fixed');
    } else {
        $('.header-section').removeClass('menu-fixed');
    }
});    

