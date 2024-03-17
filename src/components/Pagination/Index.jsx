import React from "react";
import ReactPaginate from 'react-paginate';
 
import './Pagination.scss';

const Pagination = ({setPage}) => {
    return <ReactPaginate
        className="CustomPagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selection) => {setPage(selection.selected + 1)}}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
    />;
};

export default Pagination;
