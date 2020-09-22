import React from "react";
import { Pagination, PageItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS_ACTION } from "../../store/actions/cartActions";



const PaginationComponent = () => {
	const pageSize = useSelector((state) => state.products.pageSize);
	const pages = useSelector((state) => state.products.pages);
	const currentPage = useSelector((state) => state.products.page);
	const pagesArr = [...Array.from({ length: pages }, (_, i) => i + 1)];

	const dispatch = useDispatch();
	const toPage = (page) => {
		dispatch(GET_ITEMS_ACTION(pageSize, page));
	};
	const toPrevPage = () => {
		dispatch(GET_ITEMS_ACTION(pageSize, currentPage-1));
	};
	const toNextPage = () => {
		dispatch(GET_ITEMS_ACTION(pageSize, currentPage+1));
	};

	return (
		<Pagination>
			<Pagination.Prev 
				disabled={(currentPage === 1 ? true : false)}
				onClick={() => toPrevPage()} />
			{
				pagesArr.map((page) => (
					<PageItem 
						key={page} 
						active={(currentPage === page ? true : false)}
						onClick={() => toPage(page)}
					>
					{page}
					</PageItem>
				)
				)
			}
			<Pagination.Next onClick={() => toNextPage()} />
		</Pagination>
	)
}

export default PaginationComponent;