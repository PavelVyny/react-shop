import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Item from "../UI/Card";
import { GET_MY_ITEMS_ACTION } from "../../store/actions/cartActions";
import { GET_ORIGINS_ACTION } from "../../store/actions/filterActions";

const MyProductItems = ( {isOnlyMyProducts} ) => {
	const items = useSelector((state) => state.products.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			GET_MY_ITEMS_ACTION(),
			dispatch(GET_ORIGINS_ACTION())
		);
	}, [dispatch])

	return (
		<Row className="mt-5 justify-content-center justify-content-md-between">
			{items ? (
				items.map((item) => (
					<Item key={item.id} item={item} isMyProduct="true" />
				)
				)
			) : (
					<h1>Loading</h1>
				)}
		</Row>
	);
};

export default MyProductItems;
