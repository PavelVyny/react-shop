import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getTotals } from '../../utils';


const Header = () => {

	const cart = useSelector((state) => state.products.cartList);

	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top">
				<Navbar.Brand as={NavLink} to="/">
					Y.school store
        </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<CartVidget>
						<Nav.Link as={NavLink} to="/cart" className="shop__cart position-relative">
							<FaShoppingCart style={{ fontSize: "26px" }} />
						</Nav.Link>
					</CartVidget>

					{cart.length > 0 && (
						<CartCount>${getTotals(cart).total}</CartCount>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

const CartVidget = styled.div`


`;

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
