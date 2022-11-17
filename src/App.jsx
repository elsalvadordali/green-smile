import { useState } from 'react'
import './App.css'
import Login from './Login'
import SelectTree from './SelectTree'
import Register from './Register'


function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)

  function updatePageNumber(num) {
    setPage(num)
  }

  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  )
}

export default App
