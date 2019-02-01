import React from "react";
import DressService from "../services/dressService.js";

class DressCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			"data" : [],
			"tab": "0"
		};
		const dressService = new DressService();
		dressService.fetchData().then(data => {
			this.setState({"data": data.data});
			console.log(this.state);
		});
	}

	handleClick(i) {
		if (this.state.tab == i) {
			return;
		}
		switch(i) {
		case "0":
			new DressService().fetchData().then(data => {
				this.setState({"data": data.data, "tab": i});
				console.log(this.state);
			});
			break;
		case "1":
		case "2":
		case "3": 
			this.setState({"data": [],
				"tab": i});
			break;
		}
		/*this.setState({"data": [],
			"tab": i});*/
	}

	renderList() {
		let list;
		if (this.state.tab == "0") {
			list = this.state.data.map(
				(item, index) => 
				{
					let {className, title, price, src, salesStatus} = item;
					return (<figure className="carousel-item" key={index}>
						<img className={className} src={src}/>
						<div className="carousel-item-caption">
							<figcaption>{title}</figcaption>
							<p>{price}</p>
							<p>{salesStatus}</p>
						</div>
					</figure>);
				}
			);
		}
		else if (this.state.tab == "1") {
			alert("DESIGNERS");
			console.log(this.state);
		}
		else if (this.state.tab == "2") {
			alert("FEATURED");
			console.log(this.state);
		}
		else if (this.state.tab == "3") {
			alert("LATEST");
			console.log(this.state);
		}
		
		return list;
	}

	render() {
		return (
			<section className="clothes-carousel">
				<nav>
					<button onClick={() => this.handleClick("0")}>WHAT&#39;S HOT?</button>
					<button onClick={() => this.handleClick("1")}>DESIGNERS</button>
					<button onClick={() => this.handleClick("2")}>FEATURED</button>
					<button onClick={() => this.handleClick("3")}>LATESET</button>
				</nav>
				{this.renderList()}
			</section>
		);
	}
}

export default DressCarousel;