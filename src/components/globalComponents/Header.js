import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Modal from "../../components/Modal"

import { getTotals } from '../../utils';


const Header = () => {
	const cart = useSelector((state) => state.products.cartList);
	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top">
				<Navbar.Brand as={NavLink} to="/">
					Y.school store
        		</Navbar.Brand>
				<Modal form="FormCreate" />
				<Nav.Link as={NavLink} to="/my-products" className="shop__cart position-relative">
					My products
				</Nav.Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">

					<Nav.Link as={NavLink} to="/cart" className="shop__cart position-relative">
						<FaShoppingCart style={{ fontSize: "26px" }} />
					</Nav.Link>

					{cart.length > 0 && (
						<CartCount>${getTotals(cart).total}</CartCount>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};


const CartCount = styled.div`
  width: auto;
  position: absolute;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export default Header;
