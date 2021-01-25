import React from 'react'

const DisplayBanner = ({title, content}) => {
    return (
        <div className="rb-display-banner">
            <h1>{title}</h1>
            <h3>{content}</h3>
        </div>
    )
}

export default DisplayBanner
