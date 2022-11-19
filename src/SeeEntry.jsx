import './see.css'


const SeeEntry = ({ entry, month, date, closeSee }) => {
    const prompts = [
        `You were proud of...`,
        `You were thankfur for...`,
        `You honored yourself by...`,
        `You grew by...`,
        `It was a great day because...`,
        `You smiled because...`,
        `You'll never forget this day because...`
    ];

    console.log(entry)
    return (
        <div className="see">
            <div className='bar'>
                <button className='close' onClick={() => closeSee()}>⨯</button>
            </div>
            <h5>{prompts[entry.promptNumber]}</h5>
            <div className='padding'>
                {entry.entry}
            </div>
            <p className='date'>on: {month + '/' + date}</p>
        </div>
    )
}

export default SeeEntry