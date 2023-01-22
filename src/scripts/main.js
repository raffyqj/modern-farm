// console.log("Welcome to the main module")

// const yearlyPlan = createPlan()


const {createAsparagus} = require("./seeds/asparagus.js")
const {createSoybean} = require("./seeds/soybeans.js")
const {createCorn} = require("./seeds/corn.js")
const {createSunflower} = require("./seeds/sunflower.js")
const {createWheat} = require("./seeds/wheat.js")
const {createPotato} = require("./seeds/potato.js")


console.log(createSoybean())
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

