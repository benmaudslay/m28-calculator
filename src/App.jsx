import { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";
import keys from "./keys.json";
import { Key } from "./components/Key";
import { Display } from "./components/Display";

const App = () => {
  const [total, setTotal] = useState([0]);

  const handleClick = (val) => {
    if (val === "clear") {
      setTotal([0]);
    } else if (val === "=") {
      let currentStr = total.join("");
      let newTotal = evaluate(currentStr);
      // limit number of chars for new total
      setTotal(newTotal);
    } else {
      let newTotal = [...total, val];
      if (total[0] === 0) {
        newTotal.shift();
      }
      setTotal(newTotal);
    }
  };

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <div className="calcContainer">
        <Display val={total} />
        <div className="keyContainer">
          {keys.map((item, index) => {
            return (
              <Key
                key={index}
                val={item.val}
                alias={item.alias}
                style={item.style}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
