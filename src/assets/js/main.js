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

});



