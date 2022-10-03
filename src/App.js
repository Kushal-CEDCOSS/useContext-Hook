import { useCallback, useState } from 'react';
import './App.css';
import Component1 from './Component1';

function App() {
  const [num, setNum] = useState("");

  const display = useCallback(() => {
    return num;
  },[])
  return (
    <div className="App">
      {console.log("Parent")}
      <input type="text" onChange={e => setNum(e.target.value)}/>
      <Component1 fun={display} />
    </div>
  );
}

export default App;
