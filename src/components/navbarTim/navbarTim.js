



$(document).ready(() => {
    if ($('#wrap-navTim').length) {
        
        console.log('Start JS navbar example', $('.under-navbar-items.mobile .under-navbar-item'));
       
        $('.under-navbar-item ').on('show.bs.dropdown', (e)=> {
            $(e.currentTarget).find('.under-nav-togg').addClass('active');
        });

        $('.under-navbar-item ').on('hide.bs.dropdown', (e)=> {
            $(e.currentTarget).find('.under-nav-togg').removeClass('active');
        });

        $('.upper-option').on('click', (e)=> {
            $('.upper-option').removeClass('option-active');
            $(e.currentTarget).addClass('option-active');
        });


      $('.under-navbar-items.mobile').slick({ 
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: false,
        }); 


    }
});
