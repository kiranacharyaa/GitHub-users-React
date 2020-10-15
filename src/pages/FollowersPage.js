import React, { useContext } from 'react'
import {AppContext} from './../context/AppContext';
import Loader from './../components/loader/Loader';
import Follower from './../components/Follower';
import InfoCard from './../components/infocard/InfoCard';

function FollowersPage() {

    const {loadingUserFollower,userFollowers} = useContext(AppContext);

    return (
        <section className="section-30">
            <div className="container">
                <h4>All Followers</h4>
                {loadingUserFollower?
                    <Loader />:
                    (userFollowers.length !== 0)? userFollowers.map((folrs) => (
                    <Follower name={folrs.login} avatar={folrs.avatar_url} link={folrs.html_url}
                        key={folrs.id} />
                    ))
                :
                <InfoCard classModifier="warning" icon="fa fa-exclamation" message="No followers yet" messageFull="" />
                }
            </div>
        </section>
    )
}

export default FollowersPage
