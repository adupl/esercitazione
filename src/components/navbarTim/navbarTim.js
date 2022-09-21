



$(document).ready(() => {
    if ($('#wrap-navTim').length) {

        console.log('Start JS navbar example');
       
        $('.under-navbar-item ').on('show.bs.dropdown', (e)=> {
            console.log('puntatore dropdown:',  $(e.currentTarget).find('.under-nav-togg'));
       
            $(e.currentTarget).find('.under-nav-togg').addClass('active');
        });
        $('.under-navbar-item ').on('hide.bs.dropdown', (e)=> {
            console.log('puntatore dropdown chiuso:',  $(e));
       
            $(e.currentTarget).find('.under-nav-togg').removeClass('active');
        });
    }
});
