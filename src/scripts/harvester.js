export const harvestPlants = (growingPlants) => {
    let harvestedSeeds = []
    for (const plant of growingPlants) {

        let output = plant.output      
        if (output == null) {
            output = plant[0].output
        }
        for(let i=0;i<output;i++){
            harvestedSeeds.push(plant)

        }
    }
    return harvestedSeeds
}


