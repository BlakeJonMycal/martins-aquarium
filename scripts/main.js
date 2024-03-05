import { getFish, getHarvest, getQuotes, getTips } from './database.js'


const allFish = getFish()
for (const fish of allFish) {
    console.log(fish)
}
import { FishList, mostHolyFish, soldierFish, nonHolyFish } from './fish/FishList.js'

const parentHTMLElement = document.querySelector('.Martins_tank')
parentHTMLElement.innerHTML = FishList(mostHolyFish())

const parentHTMLElementA = document.querySelector('.Martins_tank1')
parentHTMLElementA.innerHTML = FishList(soldierFish())

const parentHTMLElementB = document.querySelector('.Martins_tank2')
parentHTMLElementB.innerHTML = FishList(nonHolyFish())



const allHarvest = getHarvest()
for (const harvest of allHarvest){
    console.log(harvest)
}
import { Harvest } from './locations/locations.js'
const parentHTMLElement2 = document.querySelector('.Martins_locations')
parentHTMLElement2.innerHTML = Harvest()

const allQuotes = getQuotes()
for (const quote of allQuotes) {
    console.log(quote)
}
import { Quotes } from './quotes/quotes.js'
const parentHTMLElement3 = document.querySelector('.Martins_quotes')
parentHTMLElement3.innerHTML = Quotes()

const allTips = getTips()
for (const tips of allTips) {
    console.log(tips)
}
import { Tips } from './tips/tips.js'
const parentHTMLElement4 = document.querySelector('.Martins_tips')
parentHTMLElement4.innerHTML = Tips()