import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../store/AppContext';
import {Loader} from './../components';
import UICard from './UICard';

function FollowerW() {

    const {userData, setUserName, userFollowers, loadingUserFollower, fetchAllData} = useContext(AppContext);
    const followersCount = userData.followers.toLocaleString();

    function getThisUser(e){
        let userName = e.target.title;
        setUserName(userName)
        fetchAllData(userName)
    }

    return (
        <UICard icon="fa fa-users" title={`Followers (${followersCount})`}>
            {
                loadingUserFollower?
                <Loader /> :
                    <>
                        {
                            (userFollowers.length !== 0)? 
                                <div className="followerW-card">
                                    {userFollowers.slice(0, 8).map((folrs) => (
                                        <Link to="/" onClick={getThisUser} key={folrs.id}>
                                            <img src={folrs.avatar_url} alt={folrs.login} title={folrs.login}/>
                                        </Link>
                                    ))}
                                </div>
                            :
                            <div className="text-center">No Followers Yet</div>
                        }
                        {
                            (userFollowers.length >= 9)?<Link to="/followers" className="btn btn-outline-primary btn-block">View All</Link>:""
                        }
                    </>
            }
        </UICard>
    )
}

export default FollowerW
