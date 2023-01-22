// console.log("Welcome to the main module")

// const yearlyPlan = createPlan()


const {createAsparagus} = require("./seeds/asparagus.js")
const {createSoybean} = require("./seeds/soybeans.js")




console.log(createSoybean())
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

