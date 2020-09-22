import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Modal"

import { ADD_ITEM_ACTION } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const Item = ({ item, isMyProduct }) => {
	const dispatch = useDispatch();
	const { name, origin, price, } = item;

	const addItemToCart = () => {
		dispatch(ADD_ITEM_ACTION(item));
	};

	return (
		<CardWrapper className="product-box" xs={10} sm={6} md={4} lg={3}>
			<Card className="mb-3">
				<Card.Body>
					<Card.Title>
						<NavLink to={'/product/' + item.id}>
							{name}
						</NavLink>
					</Card.Title>
					<Card.Text>Origin: {origin}</Card.Text>
					<Card.Subtitle className="mb-2 text-info text-center">
						${price}
					</Card.Subtitle>
					{ !isMyProduct ?
					<Button variant="primary" onClick={addItemToCart}>
						Add to cart
					</Button>
					: <Modal form="FormEdit" item={item} />
					}
					
				</Card.Body>
			</Card>
		</CardWrapper>
	);
};

const CardWrapper = styled(Col)`
	.card {
		min-width: 250px;
	}
	
`;

export default Item;
