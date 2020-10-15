import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {Loader, RepoItem, Usercard} from './../components';

function ReposPage() {
    const {userRepos, loadingUser} = useContext(AppContext);
    return (
        <section className="section-30">
            <div class="container">
                <div className="row">
                    <div className="col-sm-3">
                    {loadingUser?<Loader />:
                        <Usercard />
                    }
                    </div>
                    <div className="col-sm-9">
                        <div className="ui-card">
                            <div className="ui-card_header">
                                <h5 className="ui-card_header-title"><i className="text-muted fa fa-database m-r-5"></i> All Repos</h5>
                            </div>
                            <div className="ui-card_body">
                            {loadingUser?<Loader />:
                                userRepos.map((items) => (
                                    
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReposPage
