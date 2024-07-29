$(document).ready(function () {
  function animateElements() {
    $(".animate__animated").each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        if ($(this).hasClass("navbar")) {
          $(this).css("visibility", "visible").addClass("animate__fadeInDown");
        } else {
          $(this).css("visibility", "visible").addClass("animate__fadeInUp");
        }
      }
    });
  }

  $(window).on("scroll resize", animateElements);
  $(window).trigger("scroll");
});
