import React, { useContext } from 'react';
import {demoData} from './demoData';
import {AppContext} from './../context/AppContext';
import { Button, Form, FormControl } from 'react-bootstrap';

function Searchform({setUserName, inputValue, setInputValue}) {

    const {toggleError, fetchAllData} = useContext(AppContext);

    const takeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const searchUser = (e) => {
        e.preventDefault();
        if(inputValue !== ""){
            setUserName(inputValue)
            toggleError(false, "");
            fetchAllData(inputValue);
            sessionStorage.setItem("userName",inputValue)
        }else{
            setUserName(demoData.login)
            toggleError(true, "Default user is loaded if search field is empty.");
        }
        setInputValue("");
    }



    return (
        <Form className="form-inline my-2 my-lg-0">
            <FormControl className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                value={inputValue} onChange={takeInputValue}/>
            <Button variant="success" type="submit" onClick={searchUser}><i className="fa fa-search"></i> Search</Button>
        </Form>
    )
}

export default Searchform
