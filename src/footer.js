import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
	renderLeftSide() {
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

	renderRightSide() {
		return (
			<div className="right-side">
				<span>&copy; LookShop.com</span>
				<span>All rights reserved</span>
			</div>
		)
	}

	render() {
		return (
	        <footer>
				{this.renderLeftSide()}
				{this.renderRightSide()}
			</footer>
	    );	
	}
}

export default Footer;