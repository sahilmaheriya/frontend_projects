$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('navbar-active')
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('navbar-active')
    })

    $('.portfolio .button-container .btn').click(function(){

        let filter = $(this).attr('data-filter');
        
        if(filter == 'all'){
            $('portfolio .image-container .box').show('400')
        }
        else{
            $('portfolio .image-container .box').not('.'+filter).hide('200');
            $('portfolio .image-container .box').filter('.'+filter).show('400');
        }
    })
})