import './scss/styles.scss';
import './libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer.js";

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

class App extends React.Component {
	render() {
		return (
			<Footer />
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('top')
);