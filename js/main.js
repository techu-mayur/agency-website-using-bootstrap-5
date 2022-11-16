 (function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);  


    /*============================= Smoothscroll js ==============================*/
    
     $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1000);
        event.preventDefault();
    });
 
    /*====================================== jquery scroll spy ========================================*/
     
     $body.scrollspy({
        target: ".navbar-collapse",
        offset: 76

    }); 
 
    /*====================================== Fancybox ========================================*/

      $('.fancybox-buttons').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    }); 
 
    /*====================================== Fancybox-script ========================================*/

    $(".fancybox").fancybox();  

    /*====================================== Mixit-up ========================================*/

     var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

    /*====================================== Parallex ========================================*/
 
    $('.parallax').scrolly({bgParallax: true}); 


})(jQuery);
 

/*============================= Preload==============================*/

 $(window).on('load' ,function () {
    "use strict";
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    ;
}); 




/*====================================== COLOR SCHEMES ========================================*/


 $(".option").on("click", function () {
    $(".box").toggleClass("open");
});

$("body").on("click", function (o) {
    $(o.target).closest(".box").length || $(".box").removeClass("open");
});

$(".style1").on("click", function () {
    $("#color").attr("href", "css/color1/style1.css");
});

$(".style2").on("click", function () {
    $("#color").attr("href", "css/color1/style2.css");
});

$(".style3").on("click", function () {
    $("#color").attr("href", "css/color1/style3.css");
});

$(".style4").on("click", function () {
    $("#color").attr("href", "css/color1/style4.css");
});

$(".default").on("click", function () {
    $("#color").attr("href", "css/color1/default.css");
});
$(".style5").on("click", function () {
    $("#color").attr("href", "css/color1/style5.css");
}); 
 