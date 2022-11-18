import Plant from "./Plant"
import { useState } from 'react'
import './Plant.css'

const SelectPlant = ({ goNextPage }) => {
    const plants = ['corn', 'carrot', 'cauliflower', 'plum', 'eggplant', 'tulip', 'cabbage', 'wheat', 'pumpkin', 'radish', 'lotus', 'beet', 'star fruit', 'cucumber']
    const [selectedPlant, setPlant] = useState('')

    function updatePlantState(plant) {
        setPlant(plant)
        goNextPage('garden')
    }

    return (
        <>

            <h5>{localStorage.getItem('event')?.plant}</h5>
            <h5>Select a tree</h5>
            <div className="grid">
                {plants.map(p => <Plant key={p + '-card'} plant={p} updatePlantState={updatePlantState} selectedPlant={selectedPlant} />)}
            </div>
        </>
    )
}

export default SelectPlant

