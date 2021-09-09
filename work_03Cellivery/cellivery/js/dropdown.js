// Copyright 2006-2007 javascript-array.com
var $navbarItem = $(".main_menu"),
    $navbarMenu = $(".navbar_menu"),
    $subMenu = $(".sub");
//console.log($subMenu);
$subMenu.hide();

$navbarItem.mouseenter(function () {
    //console.log(this);
    $(this).children(".sub").stop().slideDown();
});
$navbarItem.mouseleave(function () {
    $(this).children(".sub").stop().slideUp();
});
/* .stop()을 쓰는 이유: 마우스를 여러번 움직일때, 이전 애니메이션이 멈추기 전까지 애니메이션이 동작하지 않는 현상이 나타나는데 (queue 현상) 이런 문제가 발생하는 것을 막가위해 .stop()을 써주는것 */
