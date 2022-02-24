$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init(
        {
            easing: 'ease',
            duration: 1800,
            once: true
        }
    )
});

const person = {
    name: prompt('Write your name:'),
    sayHello: function() {
        alert(`Welcome to my portfolio page ${this.name[0].toUpperCase()}${this.name.slice(1, this.name.length).toLowerCase()}`)
    }
};

person.sayHello();

function play(){
    var audio = new Audio("/Zoloto - Сверчки (2).mp3");
    audio.play();
};

