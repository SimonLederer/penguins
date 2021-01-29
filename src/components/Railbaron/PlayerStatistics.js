import React from 'react'

const PlayerStatistics = ({player}) => {
    const numberFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    const formattedMoney = numberFormatter.format(player.totalPayouts)
    const averagePayout = numberFormatter.format(player.totalPayouts / Math.max(player.visitedCities.length, 0))
    const {visitedCities: citiesArr} = player;
    let cities = [];
    let regions = [];

    for(let city of citiesArr){
        let region = city.region
        if(cities.filter(c=>c.name === city.name).length > 0){
            cities = cities.map(c=>c.name === city.name ? {...c, num: c.num+1} : c)
        }else{        
            cities = [...cities, {name: city.name, num: 1}]
        }
        if(regions.filter(r=>r.name === region).length > 0){
            regions = regions.map(r=>r.name === region ? {...r, num: r.num + 1} : r)
        }else{
            regions = [...regions, {name: region, num: 1}]
        }
    }

    return (
        <div className='statistic'>
            <h1>{player.name}</h1>
            <span><b>Total Payout:</b> {formattedMoney.substring(0, formattedMoney.length - 3).replace('US','')}</span>
            <span><b>Number of Destinations:</b> {player.visitedCities.length}</span>
            <span><b>Average Payout:</b> {averagePayout.substring(0, averagePayout.length - 3).replace('US','')}</span>
            <span><b>Number of own region rolls:</b> {player.numOwnRegion}</span>
            <span><b>Regions: </b>
                {regions.length > 0 ? <div className='rb-regions-list'>
                                        {regions.map(region=><div key={region.name}>{region.name}: <span>{region.num}&nbsp;</span></div>)}
                                    </div> : 'No regions'}
            </span>
            <span><b>Destinations: </b>
                {cities.length > 0 ? <div className='rb-cities-list'>
                                        {cities.map(city=><div key={city.name}>{city.name}: <span>{city.num}&nbsp;</span></div>)}
                                    </div> : 'No destinations'}
            </span>
        </div>
    )
}

export default PlayerStatistics
