



$(document).ready(() => {
    if ($('#wrap-navTim').length) {

        console.log('Start JS navbar example');
       
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





    }
});
