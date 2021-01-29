import React, {useLayoutEffect} from 'react'
import DisplayBanner from './DisplayBanner'
import RBButton from './RBButton'
const GetPayout = ({activePlayerArr, setPlayers, services, setCurrentPage}) => {
    const [activePlayer, setActivePlayer] = activePlayerArr

    const goBack = () => {
        setPlayers(players => players.map(player => player.id === activePlayer.id ? activePlayer : player))
        setCurrentPage('MainScreen')
        setActivePlayer(undefined)
    }

    const confirmPayout = () => {
        setPlayers(players => players.map(player => player.id === activePlayer.id ? {
            ...player,
            totalPayouts: parseInt(player.totalPayouts) + parseInt(activePlayer.nextPayout),
            nextPayout: undefined,
            currentCity: player.destination,
            destination: undefined
        } : player))
        setCurrentPage('MainScreen')
    }

    useLayoutEffect(() => {
        if(!activePlayer.nextPayout){
            setActivePlayer(player=>({
                ...player,
                nextPayout: services.getPayout(player.currentCity.id, player.destination.id)
            }))
        }
    }, [activePlayer.nextPayout, services, setActivePlayer])
    const formattedMoney = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(activePlayer.nextPayout)
    const bannerContent = `${activePlayer.currentCity.name} to ${activePlayer.destination.name}: ${formattedMoney.substring(0,formattedMoney.length - 3).replace('US','')}`
    
    return (
        <div className='railbaron'>
            <DisplayBanner title={activePlayer.name} content={bannerContent}/>
            <div className="RB-button-bar" >
                <RBButton clickFunction={confirmPayout} text="Continue" className='RB-continue-btn'/>
                <RBButton clickFunction={goBack} className='rb-back-btn'/>
            </div>
        </div>
    )
}

export default GetPayout
