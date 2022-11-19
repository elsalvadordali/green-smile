import './see.css'


const SeeEntry = ({ entry, month }) => {
    const prompts = [
        `You were proud of...`,
        `You were thankfur for...`,
        `You honored yourself by...`,
        `I grew by...`,
        `It was a great day because...`,
        `You smiled because...`,
        `You'll never forget this day because...`
    ];

    console.log(entry)
    return (
        <div className="see">
            <div className='bar'>
                <button class='close'>⨯</button>
            </div>
            <h5>{prompts[entry.promptNumber]}</h5>
            <div className='padding'>
                {entry.entry}
            </div>
            <date>on: {month + '/' + Object.keys(entry)[0]}</date>
        </div>
    )
}

export default SeeEntry