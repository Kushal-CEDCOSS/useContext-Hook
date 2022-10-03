import React from 'react'

const Component2 = (props) => {
  return (
    <div>
        {props.fun2()}
        <br/>
        {console.log("Component 2")}
    </div>
  )
}

export default Component2