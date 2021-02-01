import React, {useState} from 'react'
import PlayerStatistics from './PlayerStatistics'
import RBButton from './RBButton'

const Statistics = ({players, setCurrentPage}) => {
    const [activePlayer, setActivePlayer] = useState(undefined)
    
    function hoverOnPlayer(player){
        setActivePlayer(player)
    }

    return (
        <div className='statistics-page railbaron'>
            <div className='statistics-content'>
                <div className="statistics-left-panel">
                    {players.map(player=>(
                        <div key={player.id} className='statistic-player' 
                            onMouseOver={()=>hoverOnPlayer(player)}
                            >
                            <b>{player.name} </b>
                        </div>
                    ))}
                </div>
                {activePlayer && <PlayerStatistics player={activePlayer} />}
            </div>
            <RBButton className='rb-back-btn' clickFunction={()=>setCurrentPage('MainScreen')}/>
        </div>
    )
}

export default Statistics
