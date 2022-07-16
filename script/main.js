$('document').ready(function(){

    $('.header__btn-menu').on('click',function(){
        $('.header__nav-links').css({
            'display': 'block',
            'width': '100%',
            'height': 'auto',
            'opacity': '1'
        })
        $('.header__btn-menu').css({
            'display': "none",
        })
    })

    $('.header__btn-closemenu').on('click',function(){
        $('.header__nav-links').css({
            'display': 'none',
            'width': '0px',
            'height': '0px',
            'opacity': '0'
        })
        $('.header__btn-menu').css({
            'display':'block',
        })
    })
    
})