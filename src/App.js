import './App.css';
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };

  return (
  <><div style={{fontSize:30,fontWeight:"bold"}}>{num}</div>
  <button onClick={countUp}>+</button>
  <button onClick={countDown}>-</button>
  </>
  );
}
export default App;
