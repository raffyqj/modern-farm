
export const harvestPlants = (growingPlants) => {
    let harvestedSeeds = []
    for (const plant of growingPlants) {

        let output = plant.output      
        if (plant.type == "Corn") {
            output = output / 2
        }
        for(let i=0;i<output;i++){
            harvestedSeeds.push(plant)

        }
    }
    return harvestedSeeds
}


