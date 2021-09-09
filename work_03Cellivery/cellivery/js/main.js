const a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", (event) => {
        event.preventDefault();
    });
}

const pressRelease = document.querySelector("#pressRelease");

// 스크롤 애니메이션
$(function () {
    $(".animate").scrolla({
        mobile: true, //모바일버전시 활성화
        once: false, //스크롤시 딱 한번만 하고싶을땐 true
    });
});
