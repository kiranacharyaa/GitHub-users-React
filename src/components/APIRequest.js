import React, { useContext } from 'react'
import {AppContext} from '../store/AppContext';

function APIRequest() {
    const {loadingRequest, request} = useContext(AppContext);
    let alertBG = "success";
    if(request <= 40 && request > 20){
        alertBG = "warning";
    }else if(request <= 20){
        alertBG = "danger";
    }

    return (
        <>
            <div className={`alert alert-${alertBG} m-b-30`} role="alert">
                {(!loadingRequest)? <h6 className="m-0 text-center">API Request: {request}/60</h6>:"Loading...."}
            </div>
        </>
    )
}

export default APIRequest
