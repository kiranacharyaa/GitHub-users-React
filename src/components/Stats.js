import React from 'react';

function Stats ({name, numbers, icon}){
    return (
        <div className="ui-card ui-card--15 stat-card">
            <div className="stat-card_data">
                <h3>{numbers}</h3>
                <p>{name}</p>
            </div>
            <div className="stat-card_icon">
                <i className={icon}></i>
            </div>
        </div>
    )
}

export default Stats