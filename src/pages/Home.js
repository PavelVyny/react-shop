import React from "react";
import Title from "../components/UI/Title";
import ProductItems from "../components/Home/ProductItems";
import OriginSelect from "../components/Home/OriginSelect";

const Home = () => {
	return (
		<>
			<OriginSelect />
			<Title title="All Products" />
			<ProductItems />
		</>
	);
};

export default Home;
