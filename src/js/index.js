import '../scss/styles.scss';
import '../libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import InformationSection from "./components/information_section.js";
import AcceptedCards from "./components/accepted_cards.js";

$(document).ready(function(){
	$('.top-banner').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
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
