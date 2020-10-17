import React from 'react'

function UICard({children, icon, title, float_right}) {
    return (
        <>
            <div className="ui-card">
                <div className="ui-card_header">
                    <h5 className="ui-card_header-title"><i className={`text-muted ${icon} m-r-5`}></i> {title}</h5>
                    <div className="float-right">
                        {float_right}
                    </div>
                </div>
                <div className="ui-card_body">
                    {children}
                </div>
            </div>
        </>
    )
}

export default UICard
