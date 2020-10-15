import React, { useContext } from 'react';
import Searchform from './Searchform';
import {AppContext} from './../context/AppContext';
import {Link} from 'react-router-dom';

function Navbar() {

    const {setUserName, inputValue, setInputValue, request, loadingRequest} = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="./github.svg" alt="Github Logo"/><b>GitHub Users</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {(!loadingRequest)?<a className="nav-link" href="#">Request: {request}/60</a>:"Loading...."}
                    </li>
                </ul>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                    <Searchform 
                        setUserName={setUserName}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
