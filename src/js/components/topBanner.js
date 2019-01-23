import React from "react";

class TopBanner extends React.Component {
	render() {
		return (
			<section className="top-banner">
				<div className="banner-page">
					<aside className="banner-page-text-part">
						<h3 className="banner-text-1">Crazy</h3>
						<h2 className="banner-text-2">CRAZY SUMMER</h2>
						<hr/>
						<h2 className="banner-text-3">WOMAN COLLECTION</h2>
						<button><span>SHOP NOW</span></button>
					</aside>
					<aside></aside>
				</div>
				<div className="banner-page">
					<aside className="banner-page-text-part">
						<h3 className="banner-text-1">New</h3>
						<h2 className="banner-text-2">Collection</h2>
						<hr/>
						<h2 className="banner-text-3">LIMITED SERIES</h2>
						<button><span>SHOP NOW</span></button>
					</aside>
					<aside></aside>
				</div>
				<div className="banner-page">
					<aside></aside>
					<aside className="banner-page-text-part">
						<h3 className="banner-text-1">Color</h3>
						<h2 className="banner-text-2">CRAZY COLORS</h2>
						<hr/>
						<h2 className="banner-text-3">ADD COLORS</h2>
						<button><span>SHOP NOW</span></button>
					</aside>
				</div>
				<div className="banner-page">
					<aside className="banner-page-text-part">
						<h3 className="banner-text-1">Light</h3>
						<h2 className="banner-text-2">TENDER CLOTHES</h2>
						<hr/>
						<h2 className="banner-text-3">NEW COLLECTION</h2>
						<button><span>SHOP NOW</span></button>
					</aside>
					<aside></aside>
				</div>
			</section>
		);
	}
}

export default TopBanner;
