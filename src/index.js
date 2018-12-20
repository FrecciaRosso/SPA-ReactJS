import './scss/styles.scss';
import './libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer.js";
import InformationSection from "./information_section.js";
import AcceptedCards from "./accepted_cards.js";

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
			<React.Fragment>
				<AcceptedCards />
				<InformationSection />
				<Footer />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
