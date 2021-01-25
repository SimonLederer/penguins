import React from 'react'
import NewDestArrivePanel from './NewDestArrivePanel'
import RightPanel from './RightPanel'

const MainScreen = ({setCurrentPage, players, services, activePlayerArr}) => {
    return (
        <>
         <div className="main-screen-container railbaron">
            <NewDestArrivePanel players={players} setCurrentPage={setCurrentPage} activePlayerArr={activePlayerArr}/>
            <div className='divider-vertical'></div>
            <RightPanel players={players}/>
         </div>
        </>
    )
}

export default MainScreen
