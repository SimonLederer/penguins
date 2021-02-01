import React from 'react'
import '../../css/RailbaronComponents.css'
import railbaronImage from '../../images/RailBaronTitle.png'
import vine from '../../images/vine.png'
import vineLeft from '../../images/vine-left.png'
const RailbaronHeader = () => {
    return (
        <div className='railbaron-header railbaron'>
            <img src={vineLeft} alt=""/>
            <img src={railbaronImage} alt=""/>
            <img src={vine} alt=""/>
        </div>
    )
}

export default RailbaronHeader
