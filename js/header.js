$(document).ready(function () {
var w = window.innerWidth
if(w<768){
    $(".hamburger").on('click', () => {
        $('.menu-list').addClass("open");
        var menuLi = $('.menu-list li')
        for (let index = 0; index < menuLi.length; index++) {
           $(menuLi[index]).addClass('fadeAway').css('opacity','1')
        }
    })
    $('.fa-times').on('click',()=>{
        $('.menu-list').removeClass("open")
    })
    $('.menu-list li').on('click',()=>{
        $('.menu-list').removeClass("open")
    })
}


})