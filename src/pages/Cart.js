import React from "react";

import Title from "../components/UI/Title";
import CartList from "../components/Cart/CartList";
import CartTotal from '../components/Cart/CartTotal';


const Cart = () => {

	return (
		<>
			<Title title="Cart List" />
			<CartList />
			<CartTotal />
		</>
	);
};


export default Cart;
