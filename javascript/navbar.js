$(document).on('click', '#toggleSidebar', function(){
  if ($("#sidebar").hasClass("sidebar-collapsed")) {
    $("#content").css({
      'margin-left': $('#sidebar').width()
    });
    $(".navbar").css({
      'box-shadow': '0px 10px 10px rgba(0, 0, 0, 0)'
    });
    $("#toggleSidebar img").addClass("rotated");
    $("#sidebar").removeClass("sidebar-collapsed");
    $(".sidebar").css({
      'margin-left': 0
    });
  } else {
    $("#content").css({
      'margin-left': 0
    });
    $(".navbar").css({
      'box-shadow': '0px 10px 10px rgba(0, 0, 0, 0.5)'
    });
    $("#sidebar").addClass("sidebar-collapsed");
    $(".sidebar").css({
      'margin-left': - $(".sidebar").width()
    });
    $("#toggleSidebar img").removeClass("rotated");
  }
  
  return false;
})

$(window).resize(function() {

});

$(document).ready(function(){
  if($(window).width() < 650) {
     $("#sidebar").addClass("sidebar-collapsed");
  }
  if ($("#sidebar").hasClass("sidebar-collapsed")) {
    $("#content").css({
      'margin-left': 0
    });
    $(".navbar").css({
      'box-shadow': '0px 10px 10px rgba(0, 0, 0, 0.5)'
    });
    $(".sidebar").css({
      'margin-left': - $(".sidebar").width()
    });
    $("#toggleSidebar img").removeClass("rotated");
  } else {
    $("#content").css({
      'margin-left': $('#sidebar').width()
    });
    $(".navbar").css({
      'box-shadow': '0px 10px 10px rgba(0, 0, 0, 0)'
    });
    $(".sidebar").css({
      'margin-left': 0
    });
    $("#toggleSidebar img").addClass("rotated");
  }

  $('a[href*="#"]')
  .not('a[href="#"]')
  .not('a[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        var magicconstant = $(window).height() / 650;
        var scrollLocation = target.offset().top - magicconstant*$('#topnavbar').outerHeight();
        $('html, body').animate({
          scrollTop: scrollLocation
        }, 1000, function() {
          // Callback after animation
        });
      }
    }
  });
});



// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});







  
