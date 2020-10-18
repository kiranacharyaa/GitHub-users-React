import React, { useContext } from 'react';
import Searchform from './Searchform';
import {AppContext} from './../context/AppContext';
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
                        <Nav.Link href="/followers">Followers</Nav.Link>
                        <Nav.Link href="/repos">Repos</Nav.Link>
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
