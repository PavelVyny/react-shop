export const getTotals = (cart) => {
	let total = 0;
	let cartItems = 0;

	cart.forEach((item) => {
		total += parseFloat(item.total.toFixed(2));
		cartItems += item.count;
	});

	return {
		cartItems,
		total,
	};
};

export const add = (state, id) => {
	let tempCart = [...state.cartList];
	const tempProducts = [...state.items];

	let tempItem = tempCart.find((item) => item.id === id);
	if (!tempItem) {
		tempItem = tempProducts.find((item) => item.id === id);

		let total = tempItem.price;
		let cartItem = { ...tempItem, count: 1, total };

		return [...tempCart, cartItem];
	} else {

		tempItem.count++;
		tempItem.total = parseFloat((tempItem.price * tempItem.count).toFixed(2));
		return [...tempCart];
	}
};

export const increment = (state, id) => {
	let tempCart = [...state.cartList];
	const cartItem = tempCart.find((item) => item.id === id);
	cartItem.count++;
	cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2));

	return [...tempCart];
};

export const decrement = (state, id) => {
	let tempCart = [...state.cartList];
	const cartItem = tempCart.find((item) => item.id === id);
	cartItem.count--;
	if (cartItem.count === 0) {
		return remove(state, id);
	} else {
		cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2));
		return [...tempCart];
	}
};

export const remove = (state, id) => {
	let tempCart = [...state.cartList];
	tempCart = tempCart.filter((item) => item.id !== id);
	return [...tempCart];
};
