import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import {AppContext} from '../store/AppContext';

function Error() {

    const {errorMsg, toggleError} = useContext(AppContext);

    return (
        <>
            {(errorMsg.hasError)?
                <Alert variant="danger" onClose={() => toggleError(false, "")} dismissible>
                    Note: {errorMsg.msg}
                </Alert>
            :""}
        </>
    )
}

export default Error
