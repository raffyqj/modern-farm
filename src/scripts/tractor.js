import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"



export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
       for (const seed of row) {
            let seedObject
            if (seed === 'Potato'){
                seedObject = createPotato()
                addPlant(seedObject)
            }
            else if (seed === 'Asparagus'){
                seedObject = createAsparagus()
                addPlant(seedObject)
            }
            else if (seed === 'Corn'){
                seedObject = createCorn()
                addPlant(seedObject[0])
                addPlant(seedObject[0])
            }
            else if (seed === 'Soybean') {
                seedObject = createSoybean()
                addPlant(seedObject)
            }
            else if (seed === 'Sunflower'){
                seedObject = createSunflower()
                addPlant(seedObject)
            }
            else if (seed === 'Wheat'){
                seedObject = createWheat()
                addPlant(seedObject)
            }
            
       }
    }
}


