const Plant = ({plant}) => {
    return (
        <div className="card" onClick={console.log('go to next page')}>
            <div className={plant + ' plant'}></div>
            <h4>{plant}</h4>
        </div>
    )
}

export default Plant