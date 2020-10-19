import React, { useContext } from 'react';
import {AppContext} from '../store/AppContext';

function Usercard() {

    const {userData} = useContext(AppContext);
    const {avatar_url, name, login, email, blog, location} = userData;
    return (
        <div className="ui-card ui-card--15 user-card">
            <div className="user-card_img">
                <img src={avatar_url} alt=""/>
            </div>
            <div className="user-card_full-info">
                <h5>{name}</h5>
                {(login)?<p className="text-muted">{login}</p>:""}
                {(email)? <p className="m-b-5"><i className="fa fa-envelope"></i> {email}</p> : ""}
                {(blog)?<p className="m-b-5 text-ellipsis"><i className="fa fa-window-maximize"></i> <a href={`http://${blog}`} target="_blank">{blog}</a></p>:""}
                {(location)?<p className="m-b-5"><i className="fa fa-map-marker-alt"></i> {location}</p>:""}
            </div>
        </div>
    )
}

export default Usercard
