//  상단이동
$(function () {
  $(".goTop").on("click", function () {
    let top = $("body").offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
  });
});

// splitting
$(function () {
  Splitting();
});

// scrolla.js
$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});
