$(document).ready(() => {
    if ($('#Servizi_in_evidenza').length) {
        console.log('Start JS Slickjs example');

        $('.carousel-servizi').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/images/back.png'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='../assets/images/next.png'>"
        });
    }
    
});
/* function changeColor(){
    document.getElementsByClassName('nav-link').style.cssText= 'color: blue; font-weight: bold; border-bottom: 4px solid';
} */

