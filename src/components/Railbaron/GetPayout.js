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
            totalPayouts: player.totalPayouts + activePlayer.nextPayout,
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
    const bannerContent = `${activePlayer.currentCity.name} to ${activePlayer.destination.name}: ${activePlayer.nextPayout}`
    return (
        <div className='railbaron'>
            <DisplayBanner title={activePlayer.name} content={bannerContent}/>
            <RBButton clickFunction={confirmPayout} text="Continue"/>
            <RBButton clickFunction={goBack} text="Back"/>
        </div>
    )
}

export default GetPayout
