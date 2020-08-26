import React from "react";
import { Row, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';

import CartColumns from "./CartColumns";
import CartItems from "./CartItems";
import Title from "../UI/Title";

const CartList = () => {
	const cartList = useSelector((state) => state.products.cartList);
	
	return (
    <Row className="justify-content-center">
      {cartList.length > 0 ? (
        <Table striped bordered hover size="sm">
          <CartColumns />
          <CartItems cartList={cartList} />
        </Table>
      ) : (
        <Title title="Cart is empty" classname="mt-5" />
      )}
    </Row>
  );
};

export default CartList;
