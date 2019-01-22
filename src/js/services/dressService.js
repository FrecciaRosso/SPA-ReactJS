import React from "react";

class DressService extends React.Component {
	componentDidMount() {
		fetch('http://localhost:8080/dist/mock/clothesCarousel.json')
		.then(response => response.json())
		.then(data => console.log(data));
	}
	render(props) {
		return true;
	}
}

export default DressService;