$(document).ready(() => {
    if ($('#Servizi_in_evidenza').length) {
        console.log('Start JS Slickjs example');

        $('.carousel-servizi').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });

      /*   $('.your-class').slick({
            infinite: true,
          }); */
    }
});