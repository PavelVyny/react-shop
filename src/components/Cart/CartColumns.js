import React from "react";

const CartColumns = ({ headers }) => {
	return (
		<thead>
			<tr>
				{headers.map(
					(header) => <th className="text-center" key={header}>{header}</th>
				)}


			</tr>
		</thead>
	);
};

export default CartColumns;
