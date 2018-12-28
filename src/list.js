import React from "react";
import ReactDOM from "react-dom";
import SocialIcon from "./social_icon.js";

class ListTemplate extends React.Component {
	constructor(props) {
		super(props);
	}
	renderList() {
		let list;
		switch(this.props.type) {
			case "links": 
				list = this.props.links.map(item => {
					return (<a href={item.href}>{item.innerText}</a>);
				});
				break;
			case "listItems":
				list = this.props.items.map(item => {
					return (<li className={item.classses}></li>);
				});
				break;
			case "icons":
				list = this.props.icons.map(item => {
					return (<SocialIcon classes={item.classes}/>);
				});
				break;
		}
		return list;
	}

	render() {
		return(this.renderList());
	}
}

export default ListTemplate;