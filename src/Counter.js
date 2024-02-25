import React, { useState } from 'react';

function Counter() {
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
  <>
      <button onClick={countUp} disabled={num >= 10} style={{marginRight:"10px"}}>+</button>
      <div style={{fontSize:30,fontWeight:"bold"}}>{num}</div>
      <button onClick={countDown} disabled={num <= 0}style={{marginLeft:"10px",marginRight:"10px"}}>-</button>
      <button onClick={reset} disabled={num === 0}>リセット</button>
  </>
  );
}
export default Counter;
