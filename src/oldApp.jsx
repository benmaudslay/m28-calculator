import './App.css';
import { useState } from "react"

const App = () => {
  const [total, setTotal] = useState([0])
  
  let buttons = ["AC", "/", 7, 8, 9, '*', 4, 5, 6, "/", 1, 2, 3, '+', 0, ".", "="]


  const handleClick = (val) => {
    let currentTotal = total
    currentTotal.push(val)
    setTotal(currentTotal)
    // setTotal([...total, val])
  }

  return (
    <div>
      <h1>{total}</h1>
      {buttons.map((item) => {
        return <button onClick={() => handleClick(item)}>{item}</button>
      })}
    </div>
  );
}

export default App;
