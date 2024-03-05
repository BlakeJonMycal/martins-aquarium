// Import the function that returns a copy of the fish array
import {getHarvest} from '../database.js'

export const Harvest = () => {
    // Invoke the function that you imported from the database module
    const harvests = getHarvest()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="Martins_locations">'

    // Create HTNL representations of each fish here
    for (const harvest of harvests) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location__card">
            <div class="fish__location">${harvest.location}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}