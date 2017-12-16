$(document).ready(function () {
    const setActive = function () {
        const self = $(this);
        const listMenu = $('.navigation li');
        let curIndex = -1;

        $('.nav-header').each(function (index) {
            if (self.scrollTop() > $(this).offset().top - 60) {
                curIndex = index;
            }
        });

        if (curIndex === -1) {
            listMenu.removeClass('active');
        }
        else {
            const curItemMenu = listMenu.eq(curIndex);

            if (!curItemMenu.hasClass('active')) {
                curItemMenu.addClass('active');
                curItemMenu.siblings().removeClass('active');
            }
        }
    };

    setActive();

    $('.navigation li').on('click', function (e) {
        e.preventDefault();

        const index = $(this).index();
        const curHeader = $('.header-js').eq(index).offset().top;

        $('html, body').animate({
            scrollTop: curHeader - 34
        }, 1000);
    });

    $(document).on('scroll', function () {
        const posDoc = $(this).scrollTop();

        $('.header-js').each(function (index, item) {
            const topHeader = $(this).offset().top - 38;
            const botHeader = topHeader + $(this).height();

            if (
                posDoc > topHeader &&
                posDoc < botHeader
            ) {
                $('.navigation li').removeClass('active');
                $('.navigation li').eq(index).addClass('active');
            }

        });
    });
    $(document).on('scroll', function () {
        let headerStyle = $('.main-header');
        let navBarStyle = $('.nav-bar');
        let welcomeSection =$('.welcome');

        if ($(welcomeSection).position().top > 38){
            headerStyle.css('height',  '70px');
            headerStyle.css('background', '#3a3e64');
            navBarStyle.css('box-shadow', 'none');
        } else {
            headerStyle.css('background', 'none');
            headerStyle.css('height',  '78px');
            navBarStyle.css('box-shadow',  '0 1px 0 rgba(255, 255, 255, 0.15)');
        }
    })
});
