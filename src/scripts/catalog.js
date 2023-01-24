export const catalog = (harvestedFood) => {
    // Get the main html element
    console.log(harvestedFood)
    let mainElement = document.querySelector('main')
    // Get the innerHTML string
    //let htmlStr = mainElement.innerHTML
    for (const food of harvestedFood) {
        mainElement.innerHTML += `<section class="plant">${food.type}</section>`

    }
}
