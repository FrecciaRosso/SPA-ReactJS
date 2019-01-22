import React from "react";
import ReactDOM from "react-dom";
import ListTemplate from "./list.js";

class AcceptedCards extends React.Component {
	render() {
		const cards = [
			{ classses: "card card-visa" },
			{ classses: "card card-mastercard" },
			{ classses: "card card-paypal" },
			{ classses: "card card-american-express" },
			{ classses: "card card-visa-electron" },
			{ classses: "card card-layer" },
			{ classses: "card card-maestro" },
			{ classses: "card card-delta" },
			{ classses: "card card-solo" },
			{ classses: "card card-ideal" },
			{ classses: "card card-dk" }
		];
		return(
			<section className="accepted-cards">
				<span>We accept</span>
				<ListTemplate type="listItems" items={cards}/>
			</section>
		);
	}
}

export default AcceptedCards;