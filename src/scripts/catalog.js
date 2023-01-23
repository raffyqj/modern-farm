export const catalog = (harvestedFood) => {
    // Get the main html element
    let mainElement = document.querySelector('main')
    // Get the innerHTML string
    let htmlStr = mainElement.innerHTML
    for (const food of harvestedFood) {
        htmlStr =+ `<section class="plant">${food.type}</section>`
        

    }
}
