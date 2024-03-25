import React from "react";
import ReactPaginate from 'react-paginate';
import { useDispatch } from "react-redux";
import './Pagination.scss';

import { setPage } from "../../redux/slices/filterSlice";

const Pagination = ({page}) => {
    const dispatch = useDispatch();
    
    return <ReactPaginate
        className="CustomPagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selection) => {dispatch(setPage(selection.selected + 1))}}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
    />;
};

export default Pagination;
