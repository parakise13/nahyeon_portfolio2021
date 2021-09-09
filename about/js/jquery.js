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

//NCS LIST 이미지슬라이드
$(function () {
  $(".ncsList .slide").slick({
    arrows: true, //화살표
    dots: false, //인디케이터
    autoplay: true, //자동재생
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 5000, //재생시간
    pauseOnHover: true, //호버시 멈추는 멈추도록 설정함
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
