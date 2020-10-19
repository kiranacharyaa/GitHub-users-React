import React from 'react'

function RepoItem({name, language, stargazers_count, forks_count, updated_at}) {

    const today = new Date();
    const ut = new Date(updated_at);
    let totalSeconds, lastupdated, lastupdatedFormat;
    
    function getUpdatedTime(){
        totalSeconds = ((today - ut)/1000);
        lastupdated = Math.floor(totalSeconds / 60 / 60 / 24);
        if(lastupdated === 0 ){
            lastupdatedFormat = "Today";
        }else if(lastupdated === 1){
            lastupdatedFormat = "1 day ago"
        }else{
            lastupdatedFormat = `${lastupdated} days ago`;
        }
    }
    getUpdatedTime();

    return (
        <div className="repo-card">
            <h5 className="m-b-15">{name}</h5>
            <br/>
            <p className="text-muted m-0">
                <span className="badge badge-info m-r-15" title="Language">{language}</span> 
                <span className="m-r-15" title="Stargazers"><i className="far fa-star"></i> {stargazers_count}</span> 
                <span className="m-r-15" title="Forks"><i className="far fa-code-branch"></i> {forks_count}</span> 
            </p>
            <p className="text-muted m-0">
                <span className="m-r-15"><small><i className="far fa-clock-o"></i> Last Updated: {lastupdatedFormat}</small></span>
            </p>
        </div>
    )
}

export default RepoItem
