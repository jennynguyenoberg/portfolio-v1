$(function () {
  /* --- Dropdown menu --- */
  $(".dropdown > a").click(function () {
    $(this).parent().siblings().find("ul").fadeOut(200);
    $(this).next("ul").stop(true, false, true).fadeToggle(200);
    return false;
  });
  /* --- Image slider --- */
  $(document).ready(function ($) {
    $("#slider").QCslider({
      duration: 5000
    });
  });
  /* --- Read more dropdown --- */
  $("h3").on("click", function () {
    $(this).siblings("p").slideToggle(500);
    let opacityValue = $(this).hasClass("active") ? 1 : 1;
    $(this).parent().siblings().fadeTo(500, opacityValue);
    $(this).toggleClass("active");
  });
});