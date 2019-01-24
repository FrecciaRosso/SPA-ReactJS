import React from 'react';
import TopBanner from "./topBanner.js"
import FeedbackPanel from "./feedbackPanel.js";
import CollectionsGrid from "./collections_grid.js";
import DressCarousel from "./dressCarousel.js";

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TopBanner />
				<FeedbackPanel />
				<CollectionsGrid />
				<DressCarousel />
			</React.Fragment>
		)
	}
}

export default Main;
