import React from 'react'

const RegionSelect = ({setActivePlayer, regions}) => {
    return (
        <div className='panel-list RB-same-region-panel'>
            {regions.map(region=>(
                <button className='panel-btn' key={region.name} onClick={()=>{setActivePlayer(player=>({
                    ...player,
                    nextRegion: region,
                    selectedRegion: true
                }))}}>{region.name}</button>
            ))}
        </div>
    )
}

export default RegionSelect
