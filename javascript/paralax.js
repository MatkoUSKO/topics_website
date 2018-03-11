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


  var headingbot = $('#paralax-heading').offset().top + 1.5*$('#paralax-heading').outerHeight();

  if (scrollPos > $(window).height() - headingbot) {
    var op = (( $(window).height() - $('#paralax-heading').outerHeight()- scrollPos ) / ( 2*$('#paralax-heading').outerHeight() ));
    var tp = 100 *(-1 + (( $(window).height() - scrollPos ) / ( 3*$('#paralax-heading').outerHeight() )));
    $('#paralax-heading').css({
        opacity: op,
        //top: tp
    });
  } else {
    $('#paralax-heading').css({
      opacity:100,
      //top: 0
    });
  }

  var bodybotstart = $(window).height() - ($('#paralax-body').offset().top - $('#paralax-body').outerHeight());
  var bodybotend = $(window).height() - ($('#paralax-body').offset().top - 2*$('#paralax-body').outerHeight());

  if (scrollPos > bodybotstart) {
    var op = 1 - ((scrollPos - bodybotstart) / (bodybotend - bodybotstart));
    if (op <= 0) {
      op = 0
      $('#paralax-body').css({
        display: 'block',
        opacity: op,
        //top: tp
      });
    } else {
      $('#paralax-body').css({
        display: 'block',
        opacity: op,
        //top: tp
      }); 
    }
  } else {
    $('#paralax-body').css({
      display: 'block',
      opacity: 1
      //top: 0
    });
  }
}

$(document).scroll(parallax);

$(document).ready(parallax);