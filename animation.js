$(function(){
    $(window).on('load', function () {
        // 初期設定
        $('.wrapper').hide();
        $('.date').css({
            opacity: 0,
            marginBottom: '-10px'
        });
        $('.wrapper').fadeIn(1000);

        // 名前アニメーション
        function nameBoxAnimation() {
            $('.name_box').addClass('is-tween')
        }
        setTimeout(nameBoxAnimation, 500);

        // 似顔絵アニメーション
        function portraitAnimation() {
            $('.portrait').addClass('is-tween')
        }
        setTimeout(portraitAnimation, 3000);

        // 日付アニメーション
        function dateAnimation() {
            $('.date').animate({
                opacity: 1,
                marginBottom: '0px'
            }, 500);
        }
        setTimeout(dateAnimation, 3500);
    });
});
