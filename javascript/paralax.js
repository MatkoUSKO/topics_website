function parallax() {
  var scrollPos = $(document).scrollTop();

  $('.parallax').css({
    top: scrollPos / 2
  });

  if (scrollPos > $(window).height()) {
    $('nav').addClass('fixed-top');
    $('#sidebar').addClass('fixed-top');
    $('.movedown').css({
      position: 'relative',
      top: $('nav').outerHeight()
    });
    $('#sidebar').css({
      position: 'fixed',
      top: $('nav').outerHeight()
    });
    } else {
      $('nav').removeClass('fixed-top');
      $('#sidebar').removeClass('fixed-top');
      $('.movedown').css({
        position: 'relative',
        top: 0
      });
      $('#sidebar').css({
      position: 'absolute',
      top: $('nav').outerHeight() + $(window).height()
    });
    }


  if (scrollPos > $(window).height() - 3*$('.disappear-on-scroll').outerHeight()) {
    var op = (( $(window).height() - $('.disappear-on-scroll').outerHeight()- scrollPos ) / ( 2*$('.disappear-on-scroll').outerHeight() ));
    var tp = $('.disappear-on-scroll').outerHeight()*(-1 + (( $(window).height() - scrollPos ) / ( 3*$('.disappear-on-scroll').outerHeight() )));
    $('.disappear-on-scroll').css({
        opacity: op,
        top: tp
    });
  } else {
    $('.disappear-on-scroll').css({
      opacity:100,
      top: 0
    });
  }
}

$(document).scroll(parallax);

$(document).ready(parallax);