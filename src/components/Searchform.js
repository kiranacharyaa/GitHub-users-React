import React, { useContext } from 'react';
import {demoData} from './demoData';
import {AppContext} from './../context/AppContext';

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
            window.localStorage.setItem("userName",inputValue)
        }else{
            setUserName(demoData.login)
            toggleError(true, "Default user is loaded if search field is empty.");
        }
        setInputValue("");
    }



    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                value={inputValue} onChange={takeInputValue}/>
            <button className="btn btn-success my-2 my-sm-0" type="submit" onClick={searchUser}><i className="fa fa-search"></i> Search</button>
        </form>
    )
}

export default Searchform
