import React from "react";
import { Pagination, PageItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ITEMS_ACTION, LOAD_MY_ITEMS_ACTION } from "../../store/actions/sagaActions";



const PaginationComponent = ({curPage}) => {
	const pageSize = useSelector((state) => state.products.pageSize);
	const pages = useSelector((state) => state.products.pages);
	const currentPage = useSelector((state) => state.products.page);
	const pagesArr = [...Array.from({ length: pages }, (_, i) => i + 1)];

	const dispatch = useDispatch();

	const toPage = (page) => {

		if (curPage === "my-products") {
			dispatch(LOAD_MY_ITEMS_ACTION(pageSize, page));
		} else if (curPage === "all-products") {
			dispatch(LOAD_ITEMS_ACTION(pageSize, page));
		}
	};
	const toPrevPage = () => {
		if (curPage === "my-products") {
			dispatch(LOAD_MY_ITEMS_ACTION(pageSize, currentPage-1));
		} else if (curPage === "all-products") {
			dispatch(LOAD_ITEMS_ACTION(pageSize, currentPage-1));
		}
		
	};
	const toNextPage = () => {
		if (curPage === "my-products") {
			dispatch(LOAD_MY_ITEMS_ACTION(pageSize, currentPage+1));
		} else if (curPage === "all-products") {
			dispatch(LOAD_ITEMS_ACTION(pageSize, currentPage+1));
		}
		
	};

	return (
		<Pagination className="justify-content-md-center">
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