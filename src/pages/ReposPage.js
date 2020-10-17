import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {APIRequest, FollowerW, Loader, RepoItem, UICard, Usercard} from './../components';

function ReposPage() {

    const {userRepos, sorted, loadingUserDOM} = useContext(AppContext);

    return (
        <>
            {loadingUserDOM? <Loader/> :
                <section className="section-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </div>
                            <div className="col-sm-9">
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
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ReposPage
