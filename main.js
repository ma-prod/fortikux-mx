$(document).ready(function () {
//    $(function () {
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-days').text('días');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-days').text('días');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-days').text('días');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-hours').text('en punto');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-hours').text('en punto');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-hours').text('en punto');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-minutes').text('minutos');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-minutes').text('minutos');
//        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-minutes').text('minutos');
//    });
    var timer = function(element) {
        var _currentDate = new Date();
        var days = 21;
        var hours = 9;
        var count = 59;
        var sec = 5;
        var _toDate = new Date(_currentDate.getFullYear(),
            _currentDate.getMonth(),
            _currentDate.getDate() + days,
            _currentDate.getHours() + hours,
            _currentDate.getMinutes() + count,
            _currentDate.getSeconds() + sec, 1);
        element.countdown(_toDate, function(event) {
            var days = event.strftime('%D');
            var hours = event.strftime('%H');
            var min = event.strftime('%M');
            var sec = event.strftime('%S');
            $('.day1').text(days[0]);
            $('.day2').text(days[1]);
            $('.hour1').text(hours[0]);
            $('.hour2').text(hours[1]);
            $('.minute1').text(min[0]);
            $('.minute2').text(min[1]);
            $('.second1').text(sec[0]);
            $('.second2').text(sec[1]);
        });
    };
    timer($('#timer-1'));
    timer($('#timer-2'));
    timer($('#timer-3'));
    // timer($('#timer-4'));
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var t = $(".header__menu");
    $(".menu");
    t.on("click", function() {
        $("body").toggleClass("isOpened")
    });
    var m = $(".menu__btn");
    m.on("click", function() {
        $("body").toggleClass("isOpened")
    });

    $('.callback').click(function() {
        $('.popup-window').show();
    });
    $('.close-popup').click(function() {
        $('.popup-window').hide();
    });

    $(".show-form").click(function () {
        $("body, html").animate({
            scrollTop: $("#order").offset().top
        }, 500)
    });

});
//function replaceText() {
//    var days = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-days');
//   /* var hours = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-hours');
//    var minutes = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-minutes');*/
//    var text = days.html();
//    /*var text2 = hours.html();
//    var text3 = minutes.html();*/
//    text = text.replace('дней','días');
//    /*text2 = text2.replace('часов','en punto');
//    text3 = text3.replace('минут','minutos');*/
//    days.html(text);
//    /*hours.html(text2);
//    minutes.html(text3);*/
//}