import React from "react";
import ReactDOM from "react-dom";

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

export default Footer;