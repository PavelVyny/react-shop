import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Item from "../UI/Card";
import Pagination from "../Pagination";
import { LOAD_ITEMS_ACTION, LOAD_ORIGIN_ACTION } from "../../store/actions/sagaActions";


const ProductItems = ({ isOnlyMyProducts }) => {
	const items = useSelector((state) => state.products.items);
	const pageSize = useSelector((state) => state.products.pageSize);
	const page = useSelector((state) => state.products.page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			LOAD_ITEMS_ACTION(pageSize, page),
			dispatch(LOAD_ORIGIN_ACTION()),
		);
	}, [dispatch, pageSize, page])

	return (
		<>
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
			<Pagination curPage="all-products" />
		</>
	);
};

export default ProductItems;
