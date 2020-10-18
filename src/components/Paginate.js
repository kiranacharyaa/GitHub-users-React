import React from 'react'
import { Pagination } from 'react-bootstrap'

function Paginate({numbers, setCurrentPage}) {

    function getThePageData(e){
        setCurrentPage(e.target.text)
    }
    

    return (
        <div>
            <Pagination>
                {numbers.map(items => <Pagination.Item key={items} onClick={getThePageData}>{items}</Pagination.Item>)}
            </Pagination>
        </div>
    )
}

export default Paginate
