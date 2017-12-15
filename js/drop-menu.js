$(document).ready(function () {
    let count = 0;
    $('.nav-button').click(function () {
        console.log(count);
        for (let i = 0; i = count; i++) {
            if (i%2 === 0) {
                let dropMenu = $('.drop-nav-wrap');
                dropMenu.css('display', 'flex');
            }
            else {
                let dropMenu = $('.drop-nav-wrap');
                dropMenu.css('display', 'none');
            }}
    })});
