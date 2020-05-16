//PERCENTS
function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
            show = false;

            $('.'+className).spincrement({
                from: 1,
                duration: 2000,
            });
        }
    })
}


$(function() {
    countup("count", $(".count").text());
    countup("count2", $(".count2").text());
    countup("count3", $(".count3").text());
    countup("count4", $(".count4").text());
});

//CLOSE MENU
$('.scroll').on('click', function () {
    $('.navbar-collapse').removeClass('show');
    $a = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
    return false;
});

//ARCHORS
//$("body").on('click', 'a.scroll', function(e){
//  var fixed_offset = 100;
//  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 800);
//  e.preventDefault();
//});


jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});

$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 1200);
});
//RESIZE
//$(window).resize(function () {
//    if($(window).width() <= 768){
//        $('.header').removeClass('fixed');
//    };
//}

$(function () {
    $('.menu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});

// TIMER
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 60 * 60 * 1000);
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);