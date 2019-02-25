import '../scss/styles.scss';
import '../libs/slick-1.8.1/slick/slick.min.js';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import ShoppingCart from "./components/shoppingCart.js";
import InformationSection from "./components/information_section.js";
import AcceptedCards from "./components/accepted_cards.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch } from 'react-router'; 
import { HashRouter, Route } from 'react-router-dom';

function addItemToShopCart(state = [], action) {
	if (action.type == "ADD_TO_CART") {
		return [
			...state,
			action.item
		];
	}
	return state;
}

const store = createStore(addItemToShopCart, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
		<HashRouter>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/shopcart" component={ShoppingCart}/>
			</Switch>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
);
