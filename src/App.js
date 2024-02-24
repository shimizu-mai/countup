import './App.css';
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const countUp = () => {
    if (num < 10) {
    setNum(num + 1);
    }
  };
  const countDown = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const reset = () => {
    setNum(0);
  };

  return (
  <><div style={{fontSize:30,fontWeight:"bold"}}>{num}</div>
  <button onClick={countUp} disabled={num >= 10}>+</button>
      <button onClick={countDown} disabled={num <= 0}>-</button>
      <button onClick={reset} disabled={num === 0}>リセット</button>
  </>
  );
}
export default App;
