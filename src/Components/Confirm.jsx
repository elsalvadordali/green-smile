const Confirm = ({ message, yes, no, plant }) => {
  const plantDiv = <div className={plant + '-3 plant'}></div> || null
  return (
    <div className='modal'>
      <h5>{message}</h5>
      {plantDiv}
      <div className='row'>
        <button onClick={() => yes()}>Yes</button>

        <button onClick={() => no()}>No</button>
      </div>
    </div>
  )
}

export default Confirm
