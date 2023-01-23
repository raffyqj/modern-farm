// console.log("Welcome to the main module")

// const yearlyPlan = createPlan()

import { createPlan } from "./plan.js"
import{ createAsparagus } from './seeds/asparagus.js'
import{ createSoybean } from './seeds/soybean.js'
import{ createCorn } from './seeds/corn.js'
import{ createPotato } from './seeds/potato.js'
import{ createSunflower } from './seeds/sunflower.js'
import{ createWheat } from './seeds/wheat.js'
import{ plantSeeds } from './tractor.js'
import{ usePlants } from './field.js'
import{ addPlant } from './field.js'
import{ harvestPlants } from './harvester.js'
import{ catalog } from './catalog.js'


const yearlyPlan = createPlan()

const asparaguses = createAsparagus()

const soybeans = createSoybean()

const corns = createCorn()

const sunflowers = createSunflower()

const wheats = createWheat()

const potatoes = createPotato()

plantSeeds(yearlyPlan)
const using = usePlants()

const harvesting = harvestPlants(using)

const cataloging = catalog(harvesting)
const cataloger = document.querySelector(".container")

let plantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"]
]

plantSeeds(plantingPlan)

const growingPlants = usePlants()
console.log(growingPlants)
let harvestSeeds = harvestPlants(growingPlants)
catalog(harvestSeeds)