import React from 'react'

const BackButton = ({clickFunction, text, className}) => {
    return (
        <button className={`rb-btn ${className|| ""}`} onClick={()=>{clickFunction()}}>
           {text}
        </button>
    )
}

export default BackButton
