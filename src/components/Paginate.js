import React from 'react'
import { Pagination } from 'react-bootstrap'

function Paginate({numbers, setCurrentPage}) {

    function getThePageData(e){
        setCurrentPage(e.target.text)
    }

    return (
        <>
            <Pagination>
                {numbers.map(items => <Pagination.Item key={items} onClick={getThePageData}>{items}</Pagination.Item>)}
            </Pagination>
        </>
    )
}

export default Paginate
