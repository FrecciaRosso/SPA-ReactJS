class DressService {
	fetchData() {
		return fetch('http://localhost:8080/dist/mock/clothesCarousel.json')
			.then(response => response.json());
	}
}

export default DressService;