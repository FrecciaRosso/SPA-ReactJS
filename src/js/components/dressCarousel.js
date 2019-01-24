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
				let {title, price, src, salesStatus} = item;
				return (<div key={index}>
					<p>{title}</p>
					<p>{price}</p>
					<p>{src}</p>
					<p>{salesStatus}</p>
				</div>);
			});
		return list;
	}

	render() {
		return (
			<React.Fragment>
				{this.renderList()}
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			</React.Fragment>
		);
	}
}

export default DressCarousel;