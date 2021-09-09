$(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
});

//gnb
$(function () {
    $(".gnb > li > a").on("mouseenter focus", function () {
        const gnbindex = $(".gnb > li > a").index($(this));
        //mouseenter 되면 그 자신의 인덱스 값이 gnbindex에 저장
        $(".gnb .inner").removeClass("on");
        $(".gnb .inner:eq(" + gnbindex + ")").addClass("on");
    });
    $("header").on("mouseleave", function () {
        $(".gnb .inner").removeClass("on");
    });
});

//fixheader
let scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

//윈도우창 조절 시 이벤트
$(window).on("scroll resize", function () {
    scrollFix = $(document).scrollTop();
    fixHeader();
});

//고정헤더함수 => fixheader();
function fixHeader() {
    if (scrollFix > 150) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}

//글자애니메이션 splitting 데모사이트 그대로 작성 따라하기
$(function () {
    Splitting();
});

// .top-visual 이미지 슬라이드
$(function () {
    $(".visual .slide").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $(".slick-prev").text("prev");

    //두번째 슬라이드
    $(".slide2").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: true,
    });
    $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
    $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
    $(".slide2 #slick-slide-control12").text(
        "화성동탄1차 대방디엠시티 더 센텀"
    );
    $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드6차");
});

//스크롤애니메이션 scrolla
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

//스크롤다운
$(function () {
    $(".scroll").on("click", function () {
        let scrollBtn = $("#scroll").offset().top;
        $("html, body").animate({ scrollTop: scrollBtn }, 400);
    });
});

// video
$(function () {
    $(".videoBox .mask").on("click", function () {
        $(this).css({ display: "none" });
        $(".videoBox iframe").css({ display: "block" });
    });
});
