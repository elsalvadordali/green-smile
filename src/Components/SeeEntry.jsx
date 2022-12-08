import '../Styles/See.css'

const SeeEntry = ({ entry, month, date, closeSee }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const prompts = [
    `You were proud of...`,
    `You were thankful for...`,
    `You honored yourself by...`,
    `You grew by...`,
    `It was a great day because...`,
    `You smiled because...`,
    `You'll never forget this day because...`,
  ]

  return (
    <div className='see'>
      <div className='bar'>
        <h6 className='date'>{months[month] + ' ' + date}</h6>
        <button className='close' onClick={() => closeSee()}>
          ⨯
        </button>
      </div>
      <h5>{prompts[entry.promptNumber]}</h5>
      <div className='padding'>{entry.entry}</div>
    </div>
  )
}

export default SeeEntry
