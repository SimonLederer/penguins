import React, {useState} from 'react'
import AddPlayers from '../components/Railbaron/AddPlayers'
import GetDestination from '../components/Railbaron/GetDestination'
import GetPayout from '../components/Railbaron/GetPayout'
import MainScreen from '../components/Railbaron/MainScreen'
import RailbaronHeader from '../components/Railbaron/RailbaronHeader'
import * as services from '../services/railbaron/cities'

const Railbaron = () => {
    let [players, setPlayers] = useState([])
    let [currentPage, setCurrentPage] = useState('AddPlayers')
    let activePlayerArr = useState(undefined)

    let Page

    switch (currentPage) {
        case 'AddPlayers':
            Page = <AddPlayers setPlayers={setPlayers} setCurrentPage={setCurrentPage} services={services}/>
            break;
        case 'MainScreen':
            Page = <MainScreen setCurrentPage={setCurrentPage} players={players} services={services} activePlayerArr={activePlayerArr}/>
            break;
        case 'GetDestination':
            Page = <GetDestination activePlayerArr={activePlayerArr} setPlayers={setPlayers} services={services} setCurrentPage={setCurrentPage}/>
            break;
        case 'GetPayout':
            Page = <GetPayout activePlayerArr={activePlayerArr} setPlayers={setPlayers} services={services} setCurrentPage={setCurrentPage}/>
            break;
        default:
            Page = <div>Error Page</div>
    }

    return (
        <>
            <RailbaronHeader />
            {Page}
        </>
    )
}

export default Railbaron
