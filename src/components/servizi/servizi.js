$(document).ready(() => {
    if ($('#Servizi_in_evidenza').length) {
        console.log('Start JS Slickjs example');

        $('.carousel-servizi').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
        });
    }
});