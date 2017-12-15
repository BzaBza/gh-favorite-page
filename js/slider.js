$(document).ready(function () {
    let active = $('.else');
    active.on('click', function () {
        $('.slider li').removeClass('.slide-active').addClass('.else-slide');
        $('.pagin li').removeClass('.active').addClass('.else');
        active.addClass('.slide-active').removeClass('.else-slide');
        $('.pagin .active').removeClass('.else');
        })
});
