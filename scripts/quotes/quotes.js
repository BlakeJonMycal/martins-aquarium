import {getQuotes} from '../database.js'

export const Quotes = () => {
    const quotes = getQuotes()

    let htmlString = '<article class="Martins_quotes">'

    for (const quote of quotes) {

        htmlString += `<section class="advice__card">
            <div class="fish__advice">${quote.inspo}</div>
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}