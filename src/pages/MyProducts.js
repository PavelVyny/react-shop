import React from "react";
import Title from "../components/UI/Title";
import MyProductItems from "../components/Home/MyProductItems";
import MyOriginSelect from "../components/Home/MyOriginSelect";
import MyPriceSlider from "../components/Home/MyPriceSlider";

const MyProducts = () => {
	return (
		<>
			<MyOriginSelect />
			<MyPriceSlider />
			<Title title="My Products" />
			<MyProductItems isOnlyMyProducts="true" />
		</>
	);
};

export default MyProducts;
