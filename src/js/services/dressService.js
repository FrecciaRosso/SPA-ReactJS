import React from "react";

export default function DressService() {
	(function componentDidMount() {
		fetch('http://localhost:8080/dist/mock/clothesCarousel.json')
		.then(response => response.json())
		.then(data => console.log(data));
	})();
	
	return null;
}
