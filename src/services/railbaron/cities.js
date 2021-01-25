import {rollDie, flipCoin} from './dice'
import cities from './cities.json'
import payouts from './payouts.json'
import regions from './regions.json'
import messages from './messages.json'

export function getRegion(){
  let isEven = flipCoin()
  let roll = rollDie() + rollDie()
  if(isEven){
    let region = regions.find(reg=>reg.even.includes(roll))
    return region
  }else{
    let region = regions.find(reg=>reg.odd.includes(roll))
    return region
  }
}

export function getRegions(){
  return regions
}

export function getCity(region){
  return cities[23]
    let {name:regName} = region
    let isEven = flipCoin()
    let roll = rollDie() + rollDie()
    if(isEven){
      let city = cities.find(city=>city.even.includes(roll) && city.region === regName)
      return city
    }else{
      let city = cities.find(city=>city.odd.includes(roll) && city.region === regName)
      return city
    }
}

export function getPayout(start, finish){
    return payouts[start][finish]
  }

export function generateMessage(name){
  let message = messages[Math.floor(Math.random()*messages.length)]
  return message.replace('%', name)
}