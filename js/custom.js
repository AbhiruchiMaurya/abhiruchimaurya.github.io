// Site Pre-Loader
// makes sure the whole site is loaded
$(window).on("load", function () {
  // will first fade out the loading animation
  $("#status").fadeOut();
  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(1000).fadeOut("slow");

  let header = () => {
  let text = "HI, I'M ABHIRUCHI MAURYA";

  let textElements = text.split("").map(function (c) {
    return $('<span id="' + c + '">' + c + "</span>");
  });

  let el = $(".heading-1-banner");
  let delay = 300; // Tune this for different letter delays.
  textElements.forEach(function (e, i) {
    el.append(e);
    e.hide();
    setTimeout(function () {
      e.fadeIn(300);
    }, 300 + i * delay);
  });
  
  }

  header();

});

$(document).ready(function () {
  $(document).on("click", ".collapse-switch", function () {
    $(".navigation-block ul.nav-links").slideToggle();
  });
});

// stickey header
$(window).on("load scroll resize", function () {
  var x = $(this).scrollTop();
  if (x > $(".header-section .code-block").height()) {
    $(".header-section").addClass("menu-fixed");
  } else {
    $(".header-section").removeClass("menu-fixed");
  }
});
