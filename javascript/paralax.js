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


  if (scrollPos > $(window).height() - 3*$('#paralax-heading').outerHeight()) {
    var op = (( $(window).height() - $('#paralax-heading').outerHeight()- scrollPos ) / ( 2*$('#paralax-heading').outerHeight() ));
    var tp = $('#paralax-heading').outerHeight()*(-1 + (( $(window).height() - scrollPos ) / ( 3*$('#paralax-heading').outerHeight() )));
    $('#paralax-heading').css({
        opacity: op,
        top: tp
    });
  } else {
    $('#paralax-heading').css({
      opacity:100,
      top: 0
    });
  }

  if (scrollPos > $(window).height() - 3*$('#paralax-body').outerHeight()) {
    var op = (( $(window).height() - $('#paralax-body').outerHeight()- scrollPos ) / ( 2*$('#paralax-body').outerHeight() ));
    var tp = $('#paralax-body').outerHeight()*(-1 + (( $(window).height() - scrollPos ) / ( 3*$('#paralax-body').outerHeight() )));
    $('#paralax-body').css({
        opacity: op,
        top: tp
    });
  } else {
    $('#paralax-body').css({
      opacity:100,
      top: 0
    });
  }
}

$(document).scroll(parallax);

$(document).ready(parallax);