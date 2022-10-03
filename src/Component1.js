import React, { memo, useCallback, useState } from 'react'
import Component2 from './Component2';

const Component1 = (props) => {
    const [Num2, setNum2] = useState("");

    const display2 = useCallback(() => {
        return Num2;
    }, [])
  return (
    <div>
    {console.log("Component 1")}
    {props.fun()}
    <br/>

    <input type="text" onChange={e => setNum2(e.target.value)} />
    <Component2 fun2={display2}/>
    </div>
  )
}

export default memo(Component1);