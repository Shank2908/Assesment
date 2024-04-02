import React from 'react';

function Pagination() {
    const { page, nbPages } = useGlobalContext();
    return  (
        <div className="pagination_btn">
            <button onClick={()=>getPrevPage()}>PREV</button>
            <p>
                {page} of {nbPages}
            </p>
            {/* <button onClick={()=>getNextPage()}>NEXT</button> */}
        </div>
    )
}

export default Pagination;