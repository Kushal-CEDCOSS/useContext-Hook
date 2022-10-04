import React, { memo } from 'react'

const Component2 = ({returnVal, fun}) => {
  return (
    <div>
        {console.log("Component 2")}
        Value from Component 1 is {returnVal}
        <br/>
        <input type="text" onChange={e => fun(e.target.value)} />
        <br/>
    </div>
  )
}

export default memo(Component2)