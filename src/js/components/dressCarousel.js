import React from "react";
import DressService from "../services/dressService.js";

class DressCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { "data" : []};
		const dressService = new DressService();
		dressService.fetchData().then(data => {
			this.setState({"data": data.data});
			console.log(this.state);
		});
	}
	renderList() {
		let list = this.state.data.map(
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
			});
		return list;
	}

	render() {
		return (
			<section className="clothes-carousel">
				{this.renderList()}
			</section>
		);
	}
}

export default DressCarousel;