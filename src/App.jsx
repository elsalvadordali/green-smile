import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  )

}

export default App
