import React from "react";

class Header extends React.Component {
	render() {
		return (
			<header>
				<section className="top">
					<div className="top-line">
						<p className="top-line-text">CUSTOM CARE: 123 456 789</p>
						<p className="top-line-button-text top-line-button-text-1">$ US <i className="fas fa-caret-down"></i></p>
						<p className="top-line-button-text top-line-button-text-2"><i className="fas fa-user"></i> MY ACCOUNT</p>
						<p className="top-line-button-text top-line-button-text-3"><i className="fas fa-search fa-flip-horizontal"></i></p>
					</div>
				</section>
				<section className="logo-part">
					<div className="logo">
						<img src="src/images/logo.png"></img>
						<h1>LOOKSHOP catalog</h1>
					</div>
					<div className="gap-column"></div>
					<aside className="aside-cart">
						<div className="dropdown">
							<div>Your cart</div>
							<div><i className="fas fa-caret-down"></i></div>
						</div>
						<div className="cart">
							<div className="left-side"><i className="fas fa-shopping-basket fa-lg"></i></div>
							<div className="right-side">0 ITEMS | 0 $</div>
						</div>
					</aside>
					<div className="menu">
						<div className="left-side">MENU</div>
						<div className="right-side"><button className="expander expand-menu"></button></div>
					</div>
					<div className="expander-menu menu-list">
						<a href="#">new<i className="fas fa-caret-down"></i></a>
						<a href="#">designers<i className="fas fa-caret-down"></i></a>
						<a href="#">women<i className="fas fa-caret-down"></i></a>
						<a href="#">men<i className="fas fa-caret-down"></i></a>
						<a href="#">clearence<i className="fas fa-caret-down"></i></a>
					</div>
				</section>
			</header>
		);
	}
}

export default Header;
