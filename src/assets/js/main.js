$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
      $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 190,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: false
      });

    /*colorized input in filters-block
    =======================================*/ 
    var filterBlockInput = $('#js-filters-block input');

    filterBlockInput.on('click', function(){
      if($(this).prop('checked')){
         $(this).parent('div').css('borderBottomColor', 'green');
      }else{
        $(this).parent('div').css('borderBottomColor', '')
      }
    });

    /*slider-index
    =======================================*/ 
    $("#js-slider-index").slick({
      arrows: false,
      asNavFor: '#js-slider-index-small' 
    });

    $("#js-slider-index-small").slick({
      asNavFor: '#js-slider-index',
      focusOnSelect: true,
      arrows: true,
      prevArrow: $('#js-slider-index-small-wrap .slick-left'),
      nextArrow: $('#js-slider-index-small-wrap .slick-right'),
      responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2
      }
    }
  ]
    });  

});

/*slider-photo
=======================================*/ 
$('#js-photo').slick({
   arrows: true,
   prevArrow: $('#js-photo-wrap .slick-left'),
   nextArrow: $('#js-photo-wrap .slick-right'), 
   responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

