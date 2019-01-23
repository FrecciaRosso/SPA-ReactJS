import React from 'react';

class CollectionsGrid extends React.Component {
	render() {
		return (
			<section className="collections-grid">
				<figure className="pics-container pics-container-1">
					<a href="#"><img className="pics pics-1" src="src/images/grid-pics-1.jpg" alt="here should be grid picture 1"></img></a>
					<figcaption className="caption-1">
						<h3 className="line-1">BEST</h3>
						<h2 className="line-2">OUTFITS</h2>
						<div className="line-3"><span>&</span></div>
						<h2 className="line-4">LOOKS</h2>
					</figcaption>
				</figure>
				<figure className="pics-container pics-container-2">
					<img className="pics pics-2" src="src/images/grid-pics-2.jpg" alt="here should be grid picture 2"></img>
					<figcaption className="caption-2">
						<div className="bottom-layer"></div>
						<div className="top-layer">
							<h4 className="top-layer-line top-layer-line-1">Summer</h4>
							<h4 className="top-layer-line top-layer-line-2">PARTY</h4>
							<h4 className="top-layer-line top-layer-line-3">COLLECTION</h4>
						</div>
					</figcaption>
				</figure>
				<figure className="pics-container pics-container-3">
					<img className="pics pics-3" src="src/images/grid-pics-3.jpg" alt="here should be grid picture 3"></img>
					<figcaption className="caption-3">BEST SELLERS</figcaption>
				</figure>
				<figure className="pics-container pics-container-4">
					<img className="pics pics-4" src="src/images/grid-pics-4.jpg" alt="here should be grid picture 4"></img>
					<figcaption className="caption-4">
						<span>FALL LEATHER</span>
						<button>SHOP NOW</button>
					</figcaption>
				</figure>
			</section>
		);
	}
}

export default CollectionsGrid;
