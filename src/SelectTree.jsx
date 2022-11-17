import Plant from "./Plant"

const SelectTree = () => {
    const plants = ['corn', 'carrot', 'couliflower', 'plum', 'eggplant', 'tulip', 'cabbage', 'weird', 'pumpkin', 'radish', 'lotus', 'purple', 'star fruit', 'cucumber']

    return (
        <div>
            <h5>Select a tree</h5>
            {plants.map(p => <Plant key={p + '-card'} plant={p} />)}
        </div>
    )
}

export default SelectTree

