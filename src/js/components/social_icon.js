import React from "react";
import PropTypes from 'prop-types';

class SocialIcon extends React.Component {
	render() {
		return(
			<button className={this.props.classes}>
				<a href="#"></a>
			</button>
		);
	}
}

SocialIcon.propTypes = {
	classes: PropTypes.string,
};

export default SocialIcon;
