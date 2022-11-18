import './Plant.css'

const Plant = ({ plant, updatePlantState, selectedPlant }) => {


    function updatePlant(plant) {
        const event = JSON.parse(localStorage.getItem('entry'))
        localStorage.setItem('entry', JSON.stringify({ ...event, plant }))
        updatePlantState(plant)

    }


    return (
        <div className={selectedPlant === plant ? 'selected-plant plant-card' : 'plant-card'} onClick={() => updatePlant(plant)}>
            <div className={plant + '-3' + ' plant'}></div>
            <h4>{plant}</h4>
        </div>
    )
}

export default Plant