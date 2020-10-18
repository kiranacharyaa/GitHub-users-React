import React, { useContext, useState } from 'react'
import {AppContext} from './../context/AppContext';
import {APIRequest, Follower, FollowerW, InfoCard, Loader, UICard, Usercard, Paginate} from './../components';
import { Col, Container, Row } from 'react-bootstrap';

function FollowersPage() {

    const {userFollowers, loadingUserDOM} = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageCount] = useState(10);
    let firstCount, lastCount, numbers;

    function setPagination(){
        firstCount = (currentPage * perPageCount) - perPageCount;
        lastCount = currentPage * perPageCount;
        const totalPages = Math.ceil(userFollowers.length / perPageCount);
        numbers = []; 
        for(let i=1;i<=totalPages;i++){
            numbers.push(i)
        }
    }
    setPagination();

    return (
        <>
            {loadingUserDOM? <Loader/>:
                <section className="section-30">
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </Col>
                            <Col sm={9}>
                                <UICard icon="fa fa-users" title="All Followers">
                                    {
                                        (userFollowers.length !== 0)? 
                                            <>
                                                {userFollowers.slice(firstCount, lastCount).map((folrs) => (
                                                    <Follower name={folrs.login} avatar={folrs.avatar_url} link={folrs.html_url} key={folrs.id} />
                                                ))}
                                                {(numbers.length >= 2)?<Paginate numbers={numbers} setCurrentPage={setCurrentPage} />:""}
                                            </>
                                        :
                                        <InfoCard classModifier="warning" icon="fa fa-exclamation" message="No followers yet" messageFull="" />
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

export default FollowersPage
