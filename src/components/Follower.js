import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from './../context/AppContext';

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
                <p className="text-ellipsis"><small>{link}</small></p>
            </div>
        </div>
    )
}

export default Follower
