import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import {APIRequest, Follower, FollowerW, InfoCard, Loader, UICard, Usercard} from './../components';

function FollowersPage() {

    const {userFollowers, loadingUserDOM} = useContext(AppContext);

    return (
        <>
            {loadingUserDOM? <Loader/>:
                <section className="section-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <Usercard />
                                <APIRequest />
                                <FollowerW />
                            </div>
                            <div className="col-sm-9">
                                <UICard icon="fa fa-users" title="All Followers">
                                    {
                                        (userFollowers.length !== 0)? 
                                            userFollowers.map((folrs) => (
                                                <Follower name={folrs.login} avatar={folrs.avatar_url} link={folrs.html_url} key={folrs.id} />
                                            ))
                                        :
                                        <InfoCard classModifier="warning" icon="fa fa-exclamation" message="No followers yet" messageFull="" />
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

export default FollowersPage
