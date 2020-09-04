import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Item from "../UI/Card";
import { GET_ITEMS_ACTION } from "../../store/actions/cartActions";
import { GET_ORIGINS_ACTION } from "../../store/actions/filterActions";

const ProductItems = () => {
	const items = useSelector((state) => state.products.items);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(GET_ITEMS_ACTION(),
		dispatch(GET_ORIGINS_ACTION()));
	}, [dispatch]);

	return (
		<Row className="mt-5 justify-content-center justify-content-md-between">
			{items ? (
				items.map((item) => (
					<Item key={item.id} item={item} />
				)
				)
			) : (
					<h1>Loading</h1>
				)}
		</Row>
	);
};

export default ProductItems;
