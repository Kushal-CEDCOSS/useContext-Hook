import React, { memo } from 'react'

const Component3 = ({val}) => {
  return (
    <div>
        value from Component 2 is {val}
        <br/>
        {console.log("Component 3")}
    </div>
  )
}

export default memo(Component3)