import React from "react";
import SocialIcon from "./social_icon.js";
import PropTypes from 'prop-types';

//import DressService from "../services/dressService.js";

class ListTemplate extends React.Component {
	constructor(props) {
		super(props);
		//const dressService = new DressService();
		//dressService.fetchData().then(data => console.log(data));
	}
	renderList() {
		let list;
		switch(this.props.type) {
		case "links":
			list = this.props.links.map((item, index) => {
				return <a key={index} href={item.href}>{item.innerText}</a>;
			});
			break;
		case "listItems":
			list = this.props.items.map((item, index) => {
				return <li key={index} className={item.classses}></li>;
			});
			break;
		case "icons":
			list = this.props.icons.map((item, index) => {
				return <SocialIcon key={index} classes={item.classes}/>;
			});
			break;
		}
		return list;
	}

	render() {

		return(this.renderList());
	}
}

ListTemplate.propTypes = {
	type: PropTypes.string,
	links: PropTypes.array,
	items: PropTypes.array,
	icons: PropTypes.array
};

export default ListTemplate;
