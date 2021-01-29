import React from 'react'
import NewDestArrivePanel from './NewDestArrivePanel'
import RightPanel from './RightPanel'
import RBButton from './RBButton'

const MainScreen = ({setCurrentPage, players, services, activePlayerArr}) => {
    return (
         <div className="main-screen-container railbaron">
             <div className='panel-list rb-left-panel'>
                <NewDestArrivePanel players={players} setCurrentPage={setCurrentPage} activePlayerArr={activePlayerArr}/>
                <RBButton text='Statistics' className='panel-btn' clickFunction={()=>setCurrentPage('Statistics')}/>
             </div>
            <div className='divider-vertical'></div>
            <RightPanel players={players}/>
         </div>
    )
}

export default MainScreen
