
import './Plant.css'

const Plant = ({plant, selectedPlant, updatePlantState}) => {
    const entry = JSON.parse(localStorage.getItem('entry'))

    function updatePlant(plant) {
        localStorage.setItem('entry', JSON.stringify({...entry, plant}))
        updatePlantState(plant)
    }

    return (
        <div className={selectedPlant === plant ? 'select-plant plant-card' : 'plant-card'} onClick={() => updatePlant(plant)}>
            <div className={plant + ' plant'}></div>
            <h4>{plant}</h4>
        </div>
    )
}

export default Plant