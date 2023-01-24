// console.log("Welcome to the main module")


import { createPlan } from "./plan.js"
import{ createAsparagus } from './seeds/asparagus.js'
import{ createSoybean } from './seeds/soybean.js'
import{ createCorn } from './seeds/corn.js'
import{ createPotato } from './seeds/potato.js'
import{ createSunflower } from './seeds/sunflower.js'
import{ createWheat } from './seeds/wheat.js'
import{ plantSeeds } from './tractor.js'
import{ usePlants, addPlant} from './field.js'
import{ harvestPlants } from './harvester.js'
import{ catalog } from './catalog.js'

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)
const using = usePlants()
const harvesting = harvestPlants(using)

const cataloging = catalog(harvesting)
