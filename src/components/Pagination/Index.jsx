import React from "react";
import ReactPaginate from 'react-paginate';
 
import './Pagination.scss';

const Pagination = () => {
    return <ReactPaginate
        className="CustomPagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
    />
};

export default Pagination;