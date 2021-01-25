import React, {useState} from 'react'
import '../../css/AddPlayers.css'
const AddPlayers = ({setPlayers, setCurrentPage, services}) => {
    let [playerInputs, setPlayerInputs] = useState([{name: '', id: 0}, {name: '', id: 1}, {name: '', id: 2}, {name: '', id: 3}, {name: '', id: 4}, {name: '', id: 5}])
    let firstEmptyPlayer = true;

    const handlePlayerInputs = (e, id)=>{
        const inputText = e.target.value
        const newText = inputText.split('').map((letter, index)=>index===0?letter.toUpperCase():letter.toLowerCase()).join('')
        setPlayerInputs(playerInputs=>{
            return playerInputs.map(player=>player.id===id?{...player, name:newText}:player)
        })
    }

    const submitPlayers = () => {
        const newPlayers = playerInputs.filter(player=>player.name.length>0)
        setPlayers(newPlayers.map(player=>{
            let city = services.getCity(services.getRegion())
            return {
                ...player,
                homeTown: city,
                currentCity: city,
                destination: undefined,
                nextRegion: undefined,
                nextDestination: undefined,
                totalPayouts: 0,
                nextPayout: undefined,
                selectedRegion: false
            }
        }))
        if(newPlayers.length > 1){
            setCurrentPage('MainScreen')
        }
    }

    return (
        <div className='input-players railbaron'>
            <form className='input-players-form'>                
                {playerInputs.map(player=>{
                    if(player.name.length>0){
                        return <input type="text" key={player.id} onChange={(e)=>handlePlayerInputs(e, player.id)} value={player.name} />
                    }else if(player.name.length === 0 && firstEmptyPlayer){
                        firstEmptyPlayer = false
                        return <input type="text" key={player.id} onChange={(e)=>handlePlayerInputs(e, player.id)} value={player.name} placeholder='Enter Names' />
                    }
                    return <React.Fragment key={player.id}></React.Fragment>
                })}
            </form>
            <button onClick={submitPlayers}>Start Game</button>
        </div>
    )
}

export default AddPlayers
