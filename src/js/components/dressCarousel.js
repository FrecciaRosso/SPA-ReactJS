import React from "react";
import DressService from "../services/dressService.js";

class DressCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.mainThemeColor = "rgb(253, 146, 109)";
		this.state = { 
			"data" : [],
			"tab": "0"
		};
		const dressService = new DressService("clothesCarousel");
		dressService.fetchData().then(data => {
			this.setState({"data": data.data});
			console.log(this.state);
		});
	}

	handleClick(i) {
		if (this.state.tab == i) {
			return;
		}
		let switchTabsBtns = document.getElementsByClassName("switch-tabs-panel")[0].children;
		[].forEach.call(switchTabsBtns, (item) => {item.style.backgroundColor = "white"});
		switchTabsBtns[i].style.backgroundColor = this.mainThemeColor;
		let filename;
		switch(i) {
		case "0":
			filename = "clothesCarousel";
			break;
		case "1":
			filename = "designers";
			break;
		case "2":
			filename = "featured";
			break;
		case "3": 
			filename = "latest";
			break;
		}

		new DressService(filename).fetchData().then(data => {
			this.setState({"data": data.data, "tab": i});
			console.log(this.state);
		});
	}

	renderList() {
		let list;
		list = this.state.data.map(
			(item, index) => 
			{
				let {className, title, price, src} = item;
				return (
					<figure className="carousel-item" key={index}>
						<img className={className} src={src}/>
						<a href="#" className="tooltiptext">
							SHOP IT
						</a>
						<div className="carousel-item-caption">
							<figcaption>{title}</figcaption>
							<p className="price">{price}</p>
							<button className="add-to-cart-btn">ADD TO CART</button>
						</div>
					</figure>
				);
			}
		);
		
		return list;
	}

	render() {
		return (
			<section className="clothes-carousel">
				<nav className="switch-tabs-panel">
					<button className="tab-btn" onClick={() => this.handleClick("0")}>WHAT&#39;S HOT?</button>
					<button className="tab-btn" onClick={() => this.handleClick("1")}>DESIGNERS</button>
					<button className="tab-btn" onClick={() => this.handleClick("2")}>FEATURED</button>
					<button className="tab-btn" onClick={() => this.handleClick("3")}>LATESET</button>
				</nav>
				<div className="clothes-gallery">
					{this.renderList()}
				</div>
			</section>
		);
	}
}

export default DressCarousel;