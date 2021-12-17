$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header .nav').toggleClass('nav-active')
    })

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header .nav').removeClass('nav-active')

        if($(window).scrollTop() > 0){
            $('header').addClass('header-active')
        }
        else{
            $('header').removeClass('header-active')
        }
    })

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallary:{
            enabled: true
        }
    })
})