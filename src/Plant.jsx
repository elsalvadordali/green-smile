import { useState } from "react"

const Plant = ({plant}) => {
    const event = JSON.parse(localStorage.getItem('event'))
    const [selectedPlant, setPlant] = useState(event?.plant | null)

    function updatePlant(plant) {
        localStorage.setItem('event', JSON.stringify({...event, plant}))
        console.log('plant', JSON.parse(localStorage.getItem('event')))
    }

    return (
        <div className="card" onClick={() => updatePlant(plant)}>
            <div className={plant + ' plant'}></div>
            <h4>{plant}</h4>
        </div>
    )
}

export default Plant