import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {Usercard, Stats, Repo, Languages, FollowerW, Loader, UICard, APIRequest} from './../components';
import { Link } from 'react-router-dom';

function Home() {

    const {userData, loadingUser, errorMsg, loadingUserDOM} = useContext(AppContext);
    const {public_repos, public_gists, followers, following} = userData;

    return (
        <div className="main-div">
            {loadingUserDOM? <Loader/>:
                <section className="section-30">
                    <div className="container">
                        {(errorMsg.hasError)?
                            <div className="alert alert-danger" role="alert">
                                Note: {errorMsg.msg}
                            </div>
                        :""}
                        <div className="row">
                            <div className="col-sm-3">
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </div>
                            <div className="col-sm-9">
                                <div className="row stat-card-color">
                                    <div className="col-sm-3">
                                        <Stats icon="fa fa-database" name="Repos" numbers={public_repos} />
                                    </div>
                                    <div className="col-sm-3">
                                        <Stats icon="fa fa-users" name="Followers" numbers={followers} />
                                    </div>
                                    <div className="col-sm-3">
                                        <Stats icon="fa fa-user" name="Following" numbers={following} />
                                    </div>
                                    <div className="col-sm-3">
                                        <Stats icon="fa fa-code" name="Gists" numbers={public_gists} />
                                    </div>
                                </div>

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
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Home
