import React from "react";
import ReactDOM from "react-dom";
import ListTemplate from './list.js';

class Footer extends React.Component {
	renderLeftSide() {
		const LeftSideLinks = [
			{'href': "#", 'innerText': "Privacy & Cookies"},
			{'href': "#", 'innerText': "Terms & Conditions"},
			{'href': "#", 'innerText': "Accessibility"},
			{'href': "#", 'innerText': "Store Directory"},
			{'href': "#", 'innerText': "About Us"}
		];

		return (
			<div className="left-side">
				<button className="expander expand-footer"></button>
				<aside className="expander-menu bottom-menu">
					<ListTemplate type="links" links={LeftSideLinks}/>
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