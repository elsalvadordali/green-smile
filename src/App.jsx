import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Login";
import Garden from "./Garden";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
      <Garden />
    </div>
  );
}

export default App;
