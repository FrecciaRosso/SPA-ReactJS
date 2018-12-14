import './scss/styles.scss';
import './libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";

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

class Footer extends React.Component {
	render() {
		return (
	        <footer>
				<LeftSide />
				<RightSide />
			</footer>
	    );	
	}
}

class LeftSide extends React.Component {
	render() {
		return (
			<div className="left-side">
				<button className="expander expand-footer"></button>
				<aside className="expander-menu bottom-menu">
					<a href="#">Privacy & Cookies</a>
					<a href="#">Terms & Conditions</a>
					<a href="#">Accessibility</a>
					<a href="#">Store Directory</a>
					<a href="#">About Us</a>
				</aside>
			</div>
		);
	}
}

class RightSide extends React.Component {
	render() {
		return (
			<div className="right-side">
				<span>&copy; LookShop.com</span>
				<span>All rights reserved</span>
			</div>
		)
	}
}

ReactDOM.render(
  <Footer />,
  document.getElementById('bottom')
);