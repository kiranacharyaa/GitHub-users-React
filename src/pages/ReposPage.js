import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {APIRequest, FollowerW, Loader, RepoItem, UICard, Usercard} from './../components';
import { Col, Container, Row } from 'react-bootstrap';

function ReposPage() {

    const {userRepos, sorted, loadingUserDOM} = useContext(AppContext);

    return (
        <>
            {loadingUserDOM? <Loader/> :
                <section className="section-30">
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </Col>
                            <Col sm={9}>
                                <UICard icon="fa fa-database" title="All Repos">
                                    {
                                        userRepos.sort(sorted).map((items) => (
                                            
                                            <RepoItem 
                                                key={items.id} 
                                                name={items.name} 
                                                language={items.language}
                                                stargazers_count={items.stargazers_count} 
                                                forks_count={items.forks_count}
                                                updated_at={items.updated_at} 
                                            />
                                            
                                        ))
                                    }
                                </UICard>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </>
    )
}

export default ReposPage
