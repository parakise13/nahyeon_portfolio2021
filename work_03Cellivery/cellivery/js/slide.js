//스크립트 위로 튕기는 것 방지
/*$(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
});*/

//slide
$(document).ready(function () {
    $(".slider").slick({
        arrows: true, //화살표
        dots: true, //인디케이트 해제
        fade: true, //페이드효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

$(document).ready(function () {
    $(".pressList").slick({
        arrows: true, //화살표
        dots: false, //인디케이트 해제
        fade: false, //페이드효과
        autoplay: true, //자동재생
        autoplaySpeed: 3000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
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

$(document).ready(function () {
    $(".partnerList").slick({
        arrows: true, //화살표
        dots: false, //인디케이트 해제
        fade: false, //페이드효과
        autoplay: true, //자동재생
        autoplaySpeed: 2000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
