import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getTotals } from "../../utils";

const CartTotal = () => {
	const cart = useSelector((state) => state.products.cartList);

	return (
		<Row className="justify-content-center">
			<h3 className="mt-3">Total: ${getTotals(cart).total}</h3>
		</Row>
	);
};

export default CartTotal;
