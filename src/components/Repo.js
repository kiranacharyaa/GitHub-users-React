import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import {AppContext} from '../store/AppContext';
import { Col, Row } from 'react-bootstrap';

function Repo() {

    const {userRepos, sorted} = useContext(AppContext);

    return (
        <Row>
            {userRepos.sort(sorted).slice(0, 4).map((items) => (
                <Col sm={6} key={items.id}>
                    <RepoItem  
                        name={items.name} 
                        language={items.language}
                        stargazers_count={items.stargazers_count} 
                        forks_count={items.forks_count}
                        updated_at={items.updated_at} 
                    />
                </Col>
                ))
            }
        </Row>
    )
}

export default Repo
