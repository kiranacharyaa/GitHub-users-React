import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../store/AppContext';

function Follower(props) {
    const {avatar, name, link} = props;
    const {setUserName, fetchAllData} = useContext(AppContext);

    function getThisUser(e){
        let userName = e.target.text;
        setUserName(userName)
        fetchAllData(userName)
    }

    return (
        <div className="follower-card">
            <img src={avatar} alt="" className="follower-img"/>
            <div className="follower-data">
                <h5 className="follower-name"><Link to="/" onClick={getThisUser}>{name}</Link></h5>
                <p>{link}</p>
            </div>
        </div>
    )
}

export default Follower
