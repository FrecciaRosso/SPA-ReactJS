import './scss/styles.scss';
import './libs/slick-1.8.1/slick/slick.min.js';

$(document).ready(function(){
  	$('.top-banner').slick({
    	dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //prevArrow: $(".prev"),
        //nextArrow: $(".next")
    });
});