import React, { useCallback, useState } from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const calculate = useCallback((e) => {
    console.log(e);
    setNum(e);
  },[])

  const calculate2 = useCallback((e) => {
    console.log(e);
    setNum2(e);
  },[])

  return (
    <div className="App">
      <Component1 fun={calculate}/>
      <Component2 returnVal={num} fun={calculate2} />
      <Component3 val={num2} />
    </div>
  );
}

export default App;
