import { useState } from "react"
import { evaluate } from "mathjs";
import keys from "./keys.json";

const App = () => {
  const [total, setTotal] = useState([0])

  const handleClick = (val) => {
    if (val === "clear") {
      setTotal([0])
    } else if (val === "=") {
      let currentStr = total.join("")
      let newTotal = evaluate(currentStr)
      setTotal(newTotal)
    } else {
      let newTotal = [...total, val]
      if(total[0] === 0) {
        newTotal.shift()
      }
      setTotal(newTotal)
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <Display val={total} />
      {keys.map((item, index) => {
        return (
          <Key
            key={index}
            val={item.val}
            alias={item.alias}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

const Display = (props) => {
  return <h3>{props.val}</h3>;
};

const Key = ({ alias, val, handleClick }) => {
  return <button onClick={() => handleClick(val)}>{alias ? alias : val}</button>;
};

export default App;
