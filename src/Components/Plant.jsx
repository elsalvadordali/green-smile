import '../Styles/Plant.css'
const Plant = ({ plant, updatePlantState, selectedPlant }) => {
  let date = new Date().getDate().toString()
  const entry = JSON.parse(localStorage.getItem('entry'))

  function updatePlant(plant) {
    if (updatePlantState) {
      entry[date].plant = plant
      localStorage.setItem('entry', JSON.stringify(entry))
      updatePlantState(plant)
    }
  }

  return (
    <div
      className={
        selectedPlant === plant ? 'selected-plant plant-card' : 'plant-card'
      }
      onClick={() => updatePlant(plant)}
    >
      <div className={plant + '-3' + ' plant'}></div>
      <h4>{plant}</h4>
    </div>
  )
}

export default Plant
