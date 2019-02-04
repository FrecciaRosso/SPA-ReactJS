class DressService {
	constructor(fileName) {
		this.url = 'http://localhost:8080/dist/mock/' + fileName + '.json';
	}
	fetchData() {
		//return fetch('http://localhost:8080/dist/mock/clothesCarousel.json')
		return fetch(this.url)
			.then(response => response.json());
	}
}

export default DressService;