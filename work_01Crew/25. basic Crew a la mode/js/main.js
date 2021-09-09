//preventDefault
$(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
});

//1. approach영역
$(window).on("scroll resize", function () {
    let scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();

    function fix() {
        if (scrollPos > 1250) {
            $(".fix .text").addClass("on");
        } else {
            $(".fix .text").removeClass("on");
        }
        if (scrollPos > 2700) {
            $(".fix .text").removeClass("on");
        }
    }

    function fixHeader() {
        if (scrollPos > 80) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }
    }

    function fixList() {
        $(".approach .inner .list li a").removeClass("on");
        if (scrollPos > 1250) {
            $(".approach .inner .list li a").removeClass("on");
            $(".approach .inner .list li:eq(0) a").addClass("on");
        }
        if (scrollPos > 1650) {
            $(".approach .inner .list li a").removeClass("on");
            $(".approach .inner .list li:eq(1) a").addClass("on");
        }
        if (scrollPos > 2050) {
            $(".approach .inner .list li a").removeClass("on");
            $(".approach .inner .list li:eq(2) a").addClass("on");
        }
        if (scrollPos > 2550) {
            $(".approach .inner .list li a").removeClass("on");
            $(".approach .inner .list li:eq(3) a").addClass("on");
        }
        if (scrollPos > 2990) {
            $(".approach .inner .list li a").removeClass("on");
        }
    }
});

// 2. scrolla.js
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

// 3. data-splitting animation
$(function () {
    Splitting();
});

// 4. gnb
$(function () {
    $(".innerHeader .gnbBtn").on("click", function () {
        $("nav.gnb").toggleClass("on");
    });
    $(".contents").on("click", function () {
        $("nav.gnb").removeClass("on");
    });
});

//scroll 끝
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    let scrollLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.scrollHeight;

    if (scrollLocation + windowHeight >= fullHeight) {
        console.log("yap");
        footer.classList.add("on");
    } else {
        footer.classList.remove("on");
    }
});
