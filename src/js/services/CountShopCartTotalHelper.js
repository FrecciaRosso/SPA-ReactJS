export function CounShopCartTotalHelper() {
	return this.props.testStore.reduce((accumulator, currentValue) => {
		return accumulator + +(currentValue.price.slice(1));
	}, 0);
}
