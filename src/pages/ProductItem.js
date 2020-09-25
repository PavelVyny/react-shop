import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { Col } from "react-bootstrap";
import styled from "styled-components";

import Item from "../components/UI/Card";
import { LOAD_ITEM_ACTION } from "../store/actions/sagaActions";

const ProductItem = () => {
	const item = useSelector((state) => state.products.curentItem);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(LOAD_ITEM_ACTION(id));
	}, [id, dispatch]);

	return (
		<ItemWrapper>
			<Item key={item.id} item={item} />
		</ItemWrapper>

	);
};

const ItemWrapper = styled(Col)`
	.product-box {
		max-width: 100%;
	}
	.card {
		height: 40vh;
	}
	.card-body {
		display: flex;
    	flex-direction: column;
		justify-content: center;
		align-items: center;
	}

`;



export default ProductItem;
