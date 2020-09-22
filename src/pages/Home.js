import React from "react";
import Title from "../components/UI/Title";
import ProductItems from "../components/Home/ProductItems";
import OriginSelect from "../components/Home/OriginSelect";
import PriceSlider from "../components/Home/PriceSlider";

const Home = () => {
	return (
		<>
			<OriginSelect />
			<PriceSlider />
			<Title title="All products" />
			<ProductItems isOnlyMyProducts="false" />
		</>
	);
};

export default Home;
