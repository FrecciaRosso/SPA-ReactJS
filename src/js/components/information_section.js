import React from "react";
import ListTemplate from "./list.js";

class CustomerServicePart extends React.Component {
	render() {
		const servicePartLinks = [
			{'href': "#", 'innerText': "Contact"},
			{'href': "#", 'innerText': "FAQ"},
			{'href': "#", 'innerText': "Terms of payment"},
			{'href': "#", 'innerText': "Terms of sale"},
			{'href': "#", 'innerText': "Delivery terms and conditions"},
			{'href': "#", 'innerText': "Returns and refunds"}
		];
		return(
			<div className="part customer-service-part">
				<h5 className="part-title">Customer Service</h5>
				<ListTemplate type="links" links={servicePartLinks}/>
			</div>
		);
	}
}

class InformationPart extends React.Component {
	render() {
		const informationPartLinks = [
			{'href': "#", 'innerText': "Affiliate"},
			{'href': "#", 'innerText': "Cookies"},
			{'href': "#", 'innerText': "How to shop"},
			{'href': "#", 'innerText': "About Nelly"},
			{'href': "#", 'innerText': "Investor relations"}
		];
		return(
			<div className="part information-part">
				<h5 className="part-title">Information</h5>
				<ListTemplate type="links" links={informationPartLinks}/>
			</div>
		);
	}
}

class SocialPart extends React.Component {
	render() {
		const icons = [
			{ classes: "social-icon facebook" },
			{ classes: "social-icon twitter" },
			{ classes: "social-icon pinterest" },
			{ classes: "social-icon tumblr" },
			{ classes: "social-icon viber" },
			{ classes: "social-icon skype" }
		];
		return(
			<div className="part social-part">
				<h5>Social</h5>
				<div className="social-icons">
					<ListTemplate type="icons" icons={icons}/>
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
		const campaignsPartLinks = [
			{'href': "#", 'innerText': "Evening dresses"},
			{'href': "#", 'innerText': "Makeup"},
			{'href': "#", 'innerText': "Fashion forward"},
			{'href': "#", 'innerText': "Training clothes"},
			{'href': "#", 'innerText': "Special occasion dresses"}
		];
		return(
			<div className="part campaigns-part">
				<h5>Campaigns</h5>
				<ListTemplate type="links" links={campaignsPartLinks}/>
			</div>
		);
	}
}

class StoresPart extends React.Component {
	render() {
		const storesPartLinks = [
			{'href': "#", 'innerText': "Paris"},
			{'href': "#", 'innerText': "Madrid"},
			{'href': "#", 'innerText': "London"},
			{'href': "#", 'innerText': "New York"},
			{'href': "#", 'innerText': "Tokyo"}
		];
		return(
			<div className="part stores-part">
				<h5>Stores</h5>
				<ListTemplate type="links" links={storesPartLinks}/>
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
