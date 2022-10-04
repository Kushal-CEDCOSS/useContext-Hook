import React, { memo } from 'react'

const Component1 = ({fun}) => {
    
  return (
    <div className="App">
        {console.log("Component 1")}
        <input type="text" onChange={e => fun(e.target.value)} />
        <br/>
    </div>
  )
}

export default memo(Component1);