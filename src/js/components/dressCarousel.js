import React from "react";
import DressService from "../services/dressService.js";
import Slider from "react-slick";

class DressCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.mainThemeColor = "rgb(253, 146, 109)";
		this.fileNames = {
			"WHAT'S HOT?": {"file": "clothesCarousel", "index": 0},
			"DESIGNERS": {"file": "designers", "index": 1},
			"FEATURED": {"file": "featured", "index": 2},
			"LATEST": {"file": "latest", "index": 1}
		};
		this.state = { 
			"data" : [],
			"tab": "WHAT'S HOT?"
		};
		const dressService = new DressService("clothesCarousel");
		dressService.fetchData().then(data => {
			this.setState({"data": data.data});
			console.log(this.state);
		});
	}

	handleClick() {
		let selection = (event.target.tagName == "SELECT") ? event.target.value : event.target.innerHTML;
		let tabIndex = this.fileNames[selection].index;
		let filename = this.fileNames[selection].file;
		if (this.state.tab == selection) {
			return;
		}
		let switchTabsBtns = document.getElementsByClassName("switch-tabs-panel")[0].children;
		[].forEach.call(switchTabsBtns, (item) => {item.style.backgroundColor = "white"});

		switchTabsBtns[tabIndex].style.backgroundColor = this.mainThemeColor;
		
		new DressService(filename).fetchData().then(data => {
			this.setState({"data": data.data, "tab": selection});
			console.log(this.state);
		});
	}

	renderList() {
		let list;
		list = this.state.data.map(
			(item, index) => 
			{
				let {className, title, price, src, salesStatus} = item;
				return (
					<figure className="carousel-item" key={index}>
						{salesStatus && 
							<div className="sale-mark">SALE</div>
						}
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
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 641,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				}
			]
		};
		return (
			<section className="clothes-carousel">
				<select onChange={() => this.handleClick()}>
					<option className="tab-btn">WHAT&#39;S HOT?</option>
					<option className="tab-btn">DESIGNERS</option>
					<option className="tab-btn">FEATURED</option>
					<option className="tab-btn">LATEST</option>
				</select>
				<nav className="switch-tabs-panel">
					<button className="tab-btn" onClick={() => this.handleClick("0")}>WHAT&#39;S HOT?</button>
					<button className="tab-btn" onClick={() => this.handleClick("1")}>DESIGNERS</button>
					<button className="tab-btn" onClick={() => this.handleClick("2")}>FEATURED</button>
					<button className="tab-btn" onClick={() => this.handleClick("3")}>LATEST</button>
				</nav>
				<Slider {...settings} className="clothes-gallery">
					{this.renderList()}
				</Slider>
			</section>
		);
	}
}

export default DressCarousel;