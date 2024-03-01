import { getFish, getHarvest } from './database.js'


const allFish = getFish()
for (const fish of allFish) {
    console.log(fish)
}
import { FishList } from './FishList.js'
const parentHTMLElement = document.querySelector('.Martins_tank')
parentHTMLElement.innerHTML = FishList()

const allHarvest = getHarvest()
for (const harvest of allHarvest){
    console.log(harvest)
}
import { Harvest } from './locations.js'
const parentHTMLElement2 = document.querySelector('.Martins_locations')
parentHTMLElement2.innerHTML = Harvest()