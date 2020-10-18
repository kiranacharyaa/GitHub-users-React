import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {Usercard, Stats, Repo, Languages, FollowerW, Loader, UICard, APIRequest, Error} from './../components';
import { Link } from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';

function Home() {

    const {userData, loadingUser, loadingUserDOM} = useContext(AppContext);
    const {public_repos, public_gists, followers, following} = userData;

    return (
        <div className="main-div">
            {loadingUserDOM? <Loader/>:
                <section className="section-30">
                    <Container>
                        <Error />
                        <Row>
                            <Col sm={3}>
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </Col>
                            <Col sm={9}>
                                <Row className="stat-card-color">
                                    <Col sm={3}>
                                        <Stats icon="fa fa-database" name="Repos" numbers={public_repos} />
                                    </Col>
                                    <Col sm={3}>
                                        <Stats icon="fa fa-users" name="Followers" numbers={followers} />
                                    </Col>
                                    <Col sm={3}>
                                        <Stats icon="fa fa-user" name="Following" numbers={following} />
                                    </Col>
                                    <Col sm={3}>
                                        <Stats icon="fa fa-code" name="Gists" numbers={public_gists} />
                                    </Col>
                                </Row>

                                <UICard 
                                    icon="fa fa-database" 
                                    title="Repos"
                                    float_right={
                                        <Link to="/repos" className="btn btn-outline-primary btn-sm">View All</Link>
                                    }
                                >
                                    {loadingUser?<Loader />:<Repo />}
                                </UICard>
                                
                                <UICard icon="fa fa-code" title="Languages">
                                    <Languages/>
                                </UICard>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </div>
    )
}

export default Home
