import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {Usercard, Stats, Repo, Languages, Follower, InfoCard, Loader} from './../components';
import {Link} from 'react-router-dom';

function Home() {

    const {userData, userFollowers, loadingUser, loadingUserFollower, errorMsg} = useContext(AppContext);
    const {public_repos, public_gists, followers, following} = userData;

    return (
        <div className="main-div">
            <section className="section-30">
                <div className="container">
                    {(errorMsg.hasError)?
                        <div className="alert alert-danger" role="alert">
                            Note: {errorMsg.msg}
                        </div>
                    :""}
                    <div className="row">
                        <div className="col-sm-3">
                            {loadingUser?<Loader />:<Usercard />}

                            <div className="ui-card">
                                <div className="ui-card_header">
                                    <h5 className="ui-card_header-title"><i className="text-muted fa fa-users m-r-5"></i> Followers</h5>
                                </div>
                                <div className="ui-card_body">
                                    {loadingUserFollower?
                                        <Loader />:
                                        (userFollowers.length !== 0)? userFollowers.slice(0, 5).map((folrs) => (
                                        <Follower name={folrs.login} avatar={folrs.avatar_url} link={folrs.html_url}
                                            key={folrs.id} />
                                        ))
                                    :
                                    <InfoCard classModifier="warning" icon="fa fa-exclamation" message="No followers yet" messageFull="" />
                                    }
                                    <Link to="/followers" className="btn btn-outline-primary btn-block">View All</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            {loadingUser?
                            <Loader />:
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
                            }

                            <div className="ui-card">
                                <div className="ui-card_header">
                                    <h5 className="ui-card_header-title"><i className="text-muted fa fa-database m-r-5"></i> Repos</h5>
                                    <Link to="/repos" className="btn btn-outline-primary btn-sm float-right">View all</Link>
                                </div>
                                <div className="ui-card_body">
                                {loadingUser?<Loader />:<Repo />}
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="ui-card">
                                        <div className="ui-card_header">
                                            <h5 className="ui-card_header-title"><i className="text-muted fa fa-code m-r-5"></i> Languages</h5>
                                        </div>
                                        <div className="ui-card_body">
                                            <Languages/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
