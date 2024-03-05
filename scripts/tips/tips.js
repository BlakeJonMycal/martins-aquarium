// Import the function that returns a copy of the fish array
import {getTips} from '../database.js'

export const Tips = () => {
    // Invoke the function that you imported from the database module
    const Tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="Martins_tips">'

    // Create HTNL representations of each fish here
    for (const tip of Tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tips__card">
            <div class="fish__tips">${tip.advice}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}