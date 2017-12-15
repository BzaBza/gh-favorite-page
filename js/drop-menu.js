$(document).ready(function () {
    let count = 0;
    $('.nav-button').click(function () {
        count++;
        console.log(count);
        if (count % 2 === 0) {
            let dropMenu = $('.drop-nav-wrap');
            dropMenu.css('display', 'none');
        }
        else {
            let dropMenu = $('.drop-nav-wrap');
            dropMenu.css('display', 'flex');
        }
    })
});
