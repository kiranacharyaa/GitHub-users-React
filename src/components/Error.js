import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import {AppContext} from './../context/AppContext';

function Error() {

    const {errorMsg} = useContext(AppContext);

    return (
        <div>
            {(errorMsg.hasError)?
                <Alert variant="danger">
                    Note: {errorMsg.msg}
                </Alert>
            :""}
        </div>
    )
}

export default Error
