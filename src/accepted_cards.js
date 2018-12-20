import React from "react";
import ReactDOM from "react-dom";

class AcceptedCards extends React.Component {
	render() {
		return(
			<section class="accepted-cards">
				<span>We accept</span>
				<li class="card card-visa"></li>
				<li class="card card-mastercard"></li>
				<li class="card card-paypal"></li>
				<li class="card card-american-express"></li>
				<li class="card card-visa-electron"></li>
				<li class="card card-layer"></li>
				<li class="card card-maestro"></li>
				<li class="card card-delta"></li>
				<li class="card card-solo"></li>
				<li class="card card-ideal"></li>
				<li class="card card-dk"></li>
			</section>
		);
	}
}

export default AcceptedCards;