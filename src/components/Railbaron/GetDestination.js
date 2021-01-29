import React, {useState, useLayoutEffect} from 'react'
import RBButton from './RBButton'
import RegionSelect from './RegionSelect'
const GetDestination = ({activePlayerArr, services, setPlayers, setCurrentPage}) => {
    let [activePlayer, setActivePlayer] = activePlayerArr
    let [confirmed, setConfirmed] = useState(false)  //Has a region
    let [invisible, setInvisible] = useState(false)

    const goBack = () => {
        setPlayers(players=>{
            return players.map(player=>{
                return player.id === activePlayer.id?{
                ...player,
                nextDestination: activePlayer.nextDestination,
                nextRegion: activePlayer.nextRegion
                } : player
            })
        })
        setCurrentPage('MainScreen')
    }

    const confirmDestination = () =>{
        setPlayers(players=>{
            return players.map(player=>{
                return player.id === activePlayer.id?{
                ...activePlayer,
                destination: activePlayer.nextDestination,
                nextDestination: undefined,
                nextRegion: undefined,
                visitedCities: [...player.visitedCities, activePlayer.nextDestination],
                selectedRegion: false
            } : player
        
        })
    })
        setActivePlayer(undefined)
        setCurrentPage('MainScreen')
    }

    const toggleInvisible = () => {
        setInvisible(invisible=>!invisible)
    }

    useLayoutEffect(() => { 
        function setCity(region){
            let city = services.getCity(region)
            setActivePlayer(player=>({
                ...player,
                nextDestination: city
            }))
        }

        if(activePlayer.nextDestination){
            setConfirmed(true)
            
        }else if(activePlayer.nextRegion){
            (activePlayer.nextRegion.name !== activePlayer.currentCity.region || activePlayer.selectedRegion)&& setCity(activePlayer.nextRegion)

        }else{
            let nextRegion = services.getRegion()
            setActivePlayer(player=>({
                ...player,
                nextRegion
            }))
            if(activePlayer.currentCity?.region !== nextRegion.name) {
                setConfirmed(true)
                setCity(nextRegion)
            }
        }
    }, [activePlayer.nextDestination, activePlayer.nextRegion, activePlayer.currentCity.region, services, setActivePlayer, activePlayer])
    

    // Render the component

    if(confirmed){
        return (
        <div className='RB-destination-background railbaron'>
            <img className='rb-destination-background-image' src={`${process.env.PUBLIC_URL}/images/cities/${activePlayer.nextDestination?.name.toLowerCase().replace(/[^a-z]/gi, '')}.jpg`} alt=""/>
            <div className='RB-destination-container' style={{visibility: invisible ? 'hidden' : 'visible'}}>
                <span>{services.generateMessage(activePlayer.name)}</span>
                <h1>{activePlayer.nextDestination?.name}</h1>
                <span>"{activePlayer.nextDestination?.quote}"</span>
                <span>in the {activePlayer.nextDestination?.region}</span>
                <div className='RB-button-bar'>
                    <RBButton clickFunction={confirmDestination} text='Continue' className='RB-continue-btn'/>
                    <RBButton clickFunction={goBack} className="rb-back-btn"/>
                </div>
            </div>
            <div className='rb-toggle-invisible' onClick={toggleInvisible}></div>
        </div>
    )
    }else{
        return (
        <div className='RB-full-screen-primary'>
            <h1>You rolled the same region and may select your next region</h1>
            <RegionSelect setActivePlayer={setActivePlayer} regions={services.getRegions()}/>
            <RBButton clickFunction={goBack} text='' className="rb-back-btn mar-b"/>
        </div>      
        )
    }
}

export default GetDestination
