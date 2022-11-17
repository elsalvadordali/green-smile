import Plant from "./Plant"

const SelectPlant = () => {
    const plants = ['corn', 'carrot', 'cauliflower', 'plum', 'eggplant', 'tulip', 'cabbage', 'wheat', 'pumpkin', 'radish', 'lotus', 'beet', 'star fruit', 'cucumber']

    return (
        <div>
            <h5>{localStorage.getItem('event')?.plant}</h5>
            <h5>Select a tree</h5>
            {plants.map(p => <Plant key={p + '-card'} plant={p} />)}
        </div>
    )
}

export default SelectPlant

