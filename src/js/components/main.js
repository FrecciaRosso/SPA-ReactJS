import React from 'react';
import TopBanner from "./topBanner.js"
import FeedbackPanel from "./feedbackPanel.js";
import CollectionsGrid from "./collections_grid.js";

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TopBanner />
				<FeedbackPanel />
				<CollectionsGrid />
			</React.Fragment>
		)
	}
}

export default Main;
