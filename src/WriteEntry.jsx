import { useState } from "react";
import "./WriteEntry.css";

const WriteEntry = ({ promptNumber, goNextPage }) => {

    let singleEntry = {};
    let month = new Date().getMonth().toString();
    let date = new Date().getDate().toString();

    singleEntry = {
        [date]: {
            promptNumber: 0,
            entry: "",
        }
    };
    let lsEntry = JSON.parse(localStorage.getItem('entry'))
    const [journal, setJournal] = useState(lsEntry ?
        lsEntry : singleEntry);
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
        let currentEntry = journal[date];
        currentEntry.entry = text;
        let newEntry = {
            ...journal,
            [date]: currentEntry
        };
        setJournal(newEntry);
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <h3 className="gratitude-prompts">{prompts[promptNumber]}</h3>
            <textarea
                className="gratitude-entry"
                value={journal[date].entry}
                onChange={(e) => updateJournalEntry(e.target.value)}
            />
            <button className="gratitude-button">Give Thanks!</button>
        </form>
    );

};

export default WriteEntry;
