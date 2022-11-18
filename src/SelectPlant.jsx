import Plant from "./Plant"
import { useState, useEffect } from 'react'
import './Plant.css'
import Confirm from "./Confirm";

const SelectPlant = ({ goNextPage }) => {
    const plants = ['corn', 'carrot', 'cauliflower', 'plum', 'eggplant', 'tulip', 'cabbage', 'wheat', 'pumpkin', 'radish', 'lotus', 'beet', 'star fruit', 'cucumber']
    const [selectedPlant, setPlant] = useState('')
    const [modalOpen, setModal] = useState(false)

    function updatePlantState(plant) {
        setPlant(plant)
        console.log('modal should open')
    }
    useEffect(() => {
        if (selectedPlant) setModal(true)
    }, [selectedPlant])

    console.log(modalOpen)
    function navigateAway() {
        goNextPage('garden')
    }
    function closeModal() {
        setModal(false)
        setPlant('')
    }
    const message = `Are you sure you want to plant ${selectedPlant}?`
    return (
        <div onClick={() => setModal(false)}>
            {modalOpen}
            <h5>Select a plant</h5>
            <div className="grid">
                {plants.map(p => <Plant key={p + '-card'} plant={p} updatePlantState={updatePlantState} selectedPlant={selectedPlant} />)}
            </div>
            {modalOpen && <Confirm yes={navigateAway} no={closeModal} message={message} plant={selectedPlant} />}
        </div>
    )
}

export default SelectPlant

