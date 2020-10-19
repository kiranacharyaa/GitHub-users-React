import React, { useContext, useState } from 'react'
import {AppContext} from './../store/AppContext';
import {APIRequest, Error, FollowerW, Loader, Paginate, RepoItem, UICard, Usercard} from './../components';
import { Col, Container, Row } from 'react-bootstrap';

function ReposPage() {

    const {userRepos, sorted, loadingUserDOM} = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageCount] = useState(6);
    let firstCount, lastCount, numbers;

    function setPagination(){
        firstCount = (currentPage * perPageCount) - perPageCount;
        lastCount = currentPage * perPageCount;
        const totalPages = Math.ceil(userRepos.length / perPageCount);
        numbers = []; 
        for(let i=1;i<=totalPages;i++){
            numbers.push(i)
        }
    }
    setPagination();

    return (
        <>
            {loadingUserDOM? <Loader/> :
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
                                <UICard icon="fa fa-database" title="All Repos">
                                    {
                                        userRepos.sort(sorted).slice(firstCount, lastCount).map((items) => (
                                            
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
                                    {(numbers.length >= 2)?<Paginate numbers={numbers} setCurrentPage={setCurrentPage} />:""}
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
