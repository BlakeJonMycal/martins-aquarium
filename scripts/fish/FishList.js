// Import the function that returns a copy of the fish array
import {getFish} from '../database.js'

export const FishList = (listOfFishes) => {
    let fishes = listOfFishes
    let htmlString = '<article class="Martins_tank">'
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image" src="${fish.image}"> </img></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishList = getFish()
    const holyFish = []
     for (const fish of holyFishList) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
    }
export const soldierFish = () => {
    const soldierFishList = getFish()
    const soldierFish = []
    for (const fish of soldierFishList) {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        }
    }
    return soldierFish
}

export const nonHolyFish = () => {
    const nonHolyFishList = getFish()
    const nonHolyFish = []
    for (const fish of nonHolyFishList){
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            nonHolyFish.push(fish)
        } 
    }
    return nonHolyFish
}

