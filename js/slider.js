(function($){
    $('.else').on('click', function () {
        $('.slide-two').css( 'display','flex');
        $('.first-slide').css('display','none');
    });
    $('.first').on('click', function () {
        $('.slide-two').css( 'display','none');
        $('.first-slide').css('display','flex');
    })
})(jQuery);
