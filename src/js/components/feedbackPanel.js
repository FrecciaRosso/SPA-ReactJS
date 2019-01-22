import React from "react";

class FeedbackPanel extends React.Component {
	render() {
		return (
			<section className="feedback-panel">
				<div className="feedback-panel-label label-1">Stay updated</div>
				<div className="email-input">
					<form>
						<input type="text" name="add-email" placeholder="Your email address"/>
						<button className="plus"></button>
					</form>
				</div>
				<div className="gap-column"></div>
				<div className="feedback-panel-label label-2">Find us here</div>
				<button className="facebook">
					<a href="#"></a>
				</button>
				<button className="twitter">
					<a href="#"></a>
				</button>
				<button className="pinterest">
					<a href="#"></a>
				</button>
			</section>
		);
	}
}

export default FeedbackPanel;
