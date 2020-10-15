import React from 'react';
import './infocard.css';

function InfoCard({classModifier, icon, message, messageFull}) {
    return (
        <div className={`info-card info-card--${classModifier}`}>
            <div className="info-card_icon">
                <i className={icon}></i>
            </div>
            <h2 className="info-card_label">{message}</h2>
            <div className="info-card_message">{messageFull}</div>
        </div>
    )
}

export default InfoCard
