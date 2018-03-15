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

  // VIDEO OPACITY
  if (scrollPos < $(window).height()) {
    var op = 1 - scrollPos / $(window).height();
    $("#myVideo").css({
      opacity: op
    });
  } else { 
    $("#myVideo").css({
      opacity: 0
    });
  }

  //VIDEO NOT VISIBLE
  if (scrollPos < 2*$(window).height()) {
    var op = 1 - scrollPos / $(window).height();
    $("#myVideo").css({
      display: block
    });
  } else { 
    $("#myVideo").css({
      display: none
    });
  }

$(document).scroll(parallax);
$(window).resize(parallax);
$(document).ready(parallax);