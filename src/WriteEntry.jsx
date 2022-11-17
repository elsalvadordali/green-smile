import { useState } from "react"

const WriteEntry = ({promptNumber, goNextPage}) => {
    const [journal, setJournal] = useState(localStorage.getItem('entry') ? JSON.parse(localStorage.getItem('entry')) : {
        date: new Date().getDate(),
        promptNumber,
        entry: ''
    })

    localStorage.setItem('entry', JSON.stringify(journal))
    const prompts = [
        `Today I'm proud of...`,
        `I'm trankful for...`,
        `I honored myself by...`,
        `I grew today by...`,
        `Today was a great day because...`,
        `Today I smiled because...`,
        `I'll never forget today because...`
    ]
    function submit() {
        goNextPage('select')
    }
    return (
        <form onSubmit={() => submit()}>
        {promptNumber}
            <h2>{prompts[promptNumber]}</h2>
            <textarea value={journal.entry} onChange={(e) => setJournal({...journal, entry: e.target.value})}/>
            <button>Give Thanks!</button>
        </form>
    )
}

export default WriteEntry
