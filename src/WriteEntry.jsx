import { useState } from "react";

const WriteEntry = ({ promptNumber, goNextPage }) => {
    let monthEntry = {};
    let month = new Date().getMonth().toString();
    let date = new Date().getDate().toString();

    monthEntry[month] = {
        [date]: {
            promptNumber: 0,
            entry: "",
        }
    };
    let lsEntry = JSON.parse(localStorage.getItem('entry'))
    const [journal, setJournal] = useState(lsEntry ?
        lsEntry : { ...monthEntry });

    localStorage.setItem('entry', JSON.stringify(journal));
    const prompts = [
        `Today I'm proud of...`,
        `I'm thankful for...`,
        `I honored myself by...`,
        `I grew today by...`,
        `Today was a great day because...`,
        `Today I smiled because...`,
        `I'll never forget today because...`
    ];
    function submit(e) {
        e.preventDefault()
        goNextPage('select')
    }
    function updateJournalEntry(text) {
        let currentEntry = journal[month][date]
        currentEntry.entry = text
        let newEntry = {
            ...journal, [month]: { [date]: currentEntry }
        }
        setJournal(newEntry);
    }
    return (
        <form onSubmit={(e) => submit(e)}>
            {promptNumber}
            <h2>{prompts[promptNumber]}</h2>
            <textarea value={journal[month][date].entry} onChange={(e) => updateJournalEntry(e.target.value)} />
            <button>Give Thanks!</button>
        </form>
    );
};

export default WriteEntry;
