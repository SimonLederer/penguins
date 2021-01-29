import React from 'react'

const DisplayBanner = ({title, content}) => {
    return (
        <div className="rb-display-banner">
            <div>
                <h1>{title}</h1>
                <h3>{content}</h3>
            </div>
        </div>
    )
}

export default DisplayBanner
