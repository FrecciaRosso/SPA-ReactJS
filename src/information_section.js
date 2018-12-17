import React from "react";
import ReactDOM from "react-dom";

class CustomerServicePart extends React.Component {
	render() {
		return(
			<div className="part customer-service-part">
				<h5 className="part-title">Customer Service</h5>
				<a href="#">Contact</a>
				<a href="#">FAQ</a>
				<a href="#">Terms of payment</a>
				<a href="#">Terms of sale</a>
				<a href="#">Delivery terms and conditions</a>
				<a href="#">Returns and refunds</a>
			</div>
		);
	}
}

class InformationPart extends React.Component {
	render() {
		return(
			<div className="part information-part">
				<h5 className="part-title">Information</h5>
				<a href="#">Affiliate</a>
				<a href="#">Cookies</a>
				<a href="#">How to shop</a>
				<a href="#">About Nelly</a>
				<a href="#">Investor relations</a>
			</div>
		);
	}
}

class SocialIcon extends React.Component {
	render() {
		return(
			<button className={this.props.class}>
				<a href="#"></a>
			</button>
		);
	}
}

class SocialPart extends React.Component {
	render() {
		return(
			<div className="part social-part">
				<h5>Social</h5>
				<div className="social-icons">
					<SocialIcon class="social-icon facebook"/>
					<SocialIcon class="social-icon twitter"/>
					<SocialIcon class="social-icon pinterest"/>
					<SocialIcon class="social-icon tumblr"/>
					<SocialIcon class="social-icon viber"/>
					<SocialIcon class="social-icon skype"/>
				</div>
			</div>
		);
	}
}

class GuaranteePart extends React.Component {
	render() {
		return(
			<div className="part guarantee-part">
				<img src="src/images/guarantee.png" />
			</div>
		);
	}
}

class CampaignsPart extends React.Component {
	render() {
		return(
			<div className="part campaigns-part">
				<h5>Campaigns</h5>
				<a href="#">Evening dresses</a>
				<a href="#">Makeup</a>
				<a href="#">Fashion forward</a>
				<a href="#">Training clothes</a>
				<a href="#">Special occasion dresses</a>
			</div>
		);
	}
}

class StoresPart extends React.Component {
	render() {
		return(
			<div className="part stores-part">
				<h5>Stores</h5>
				<a href="#">Paris</a>
				<a href="#">Madrid</a>
				<a href="#">London</a>
				<a href="#">New York</a>
				<a href="#">Tokyo</a>
			</div>
		);
	}
}

class InformationSection extends React.Component {
	render() {
		return(
			<section className="information-section">
				<CustomerServicePart />
				<InformationPart />
				<SocialPart />
				<GuaranteePart />
				<CampaignsPart />
				<StoresPart />
	    	</section>
		);
	}
}

export default InformationSection;