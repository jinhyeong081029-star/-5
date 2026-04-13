$(function () {
    $('.header .btn').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header h1').toggleClass('on');
    });

    $(' .header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
    })
});