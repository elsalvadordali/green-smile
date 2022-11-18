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
    const [journal, setJournal] = useState(localStorage.getItem('entry') ?
        JSON.parse(localStorage.getItem('entry'))
        : { ...monthEntry });

    localStorage.setItem('entry', JSON.stringify(journal));
    const prompts = [
        `Today I'm proud of...`,
        `I'm trankful for...`,
        `I honored myself by...`,
        `I grew today by...`,
        `Today was a great day because...`,
        `Today I smiled because...`,
        `I'll never forget today because...`
    ];
    function submit() {
        goNextPage('select');
    }
    function updateJournalEntry(text) {
        setJournal({ ...journal, [month]: { [date]: { entry: text } } });
    }
    return (
        <form onSubmit={() => submit()}>
            {promptNumber}
            <h2>{prompts[promptNumber]}</h2>
            <textarea value={journal[month][date].entry} onChange={(e) => updateJournalEntry(e.target.value)} />
            <button>Give Thanks!</button>
        </form>
    );
};

export default WriteEntry;
