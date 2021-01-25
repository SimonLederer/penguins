import React from 'react'

const RightPanel = ({players}) => {
    return (
        <div className="main-screen-right-side">
            <div className="RBstatus">
                <h1>Journeys</h1>
                <div className="RB-content-box">
                    {players.map(player=>(
                        <React.Fragment key={player.id}><h2><u>{player.name}</u></h2><span>{player.currentCity?.name} {player.destination?.name ? 'to' : ''} {player.destination?.name}</span></React.Fragment>
                    ))}
                </div>
            </div>
            <div className='divider-horizontal'></div>
            <div className="RBhome-towns">
                <h1>Home Towns</h1>
                <div className="RB-content-box">
                    {players.map(player=>(
                       <div key={player.id}><b>{player.name}:</b> {player.homeTown?.name}</div>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default RightPanel
