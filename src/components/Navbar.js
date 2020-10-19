import React, { useContext } from 'react';
import Searchform from './Searchform';
import {AppContext} from './../store/AppContext';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {

    const {setUserName, inputValue, setInputValue} = useContext(AppContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/"><img src="./github.svg" alt="Github Logo"/><b>GitHub Users</b></Link>
                <Navbar.Toggle aria-controls="navbarGit" />

                <Navbar.Collapse id="navbarGit">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/followers">Followers</Link>
                        <Link className="nav-link" to="/repos">Repos</Link>
                    </Nav>
                    <Searchform 
                        setUserName={setUserName}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
