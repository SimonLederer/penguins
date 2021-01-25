import React from 'react'

const NewDestArrivePanel = ({players, setCurrentPage, activePlayerArr}) => {
    const [, setActivePlayer] = activePlayerArr
    const handleSelectPlayer = (player) =>{
        setActivePlayer(player)
        if(!player.destination){
            setCurrentPage('GetDestination')
            return
        }
        setCurrentPage('GetPayout')
    }
    return (
        <div className='panel-list'>
            {players.map(player=>(
                <button className="panel-btn" key={player.id} onClick={()=>{handleSelectPlayer(player)}}>{player.name}</button>
            ))}
        </div>
    )
}

export default NewDestArrivePanel
