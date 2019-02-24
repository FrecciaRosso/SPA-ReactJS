import '../scss/styles.scss';
import '../libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import InformationSection from "./components/information_section.js";
import AcceptedCards from "./components/accepted_cards.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function addItemToShopCart(state = [], action) {
	if (action.type == "ADD_TO_CART") {
		return [
			...state,
			action.item
		];
	}
	return state;
}

const store = createStore(addItemToShopCart);

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
				<AcceptedCards />
				<InformationSection />
				<Footer />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
