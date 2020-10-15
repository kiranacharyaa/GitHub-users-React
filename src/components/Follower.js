import React, { useContext } from 'react';
import {AppContext} from './../context/AppContext';

function Follower(props) {
    const {avatar, name, link} = props;
    const {setUserName} = useContext(AppContext);

    function getThisUser(e){
        setUserName(e.target.text)
    }

    return (
        <div className="follower-card">
            <img src={avatar} alt="" className="follower-img"/>
            <div className="follower-data">
                <h5 className="follower-name"><a href="#!" onClick={getThisUser}>{name}</a></h5>
                <p className="text-ellipsis"><small>{link}</small></p>
            </div>
        </div>
    )
}

export default Follower
