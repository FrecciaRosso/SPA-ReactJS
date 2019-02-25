import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CounShopCartTotalHelper } from "../services/CountShopCartTotalHelper.js";

class ShoppingCart extends React.Component {
	renderShoppedItems() {
		let list;
		list = this.props.testStore.map((item, index) => {
			return <tr key={index}>
				<td>{item.name}</td>
				<td>{item.price}</td>
			</tr>;
		});
		return list;
	}
	render() {
		let self = this;
		return (
			<div>
				<table>
					<tbody>
						{this.renderShoppedItems()}
					</tbody>
				</table>
				<div>TOTAL: {CounShopCartTotalHelper.bind(self)()}$</div>
			</div>
		);
	}
}

ShoppingCart.propTypes = {
	testStore: PropTypes.array
};

export default connect(
	state => ({
		testStore: state
	})
)(ShoppingCart);