import React from 'react'

const message = (props)=>
  <div>{props.msg}</div>



class Names extends React.Component {
    
    render(){
        return (
            <div>
              {message({msg:'hello world'})}
              {message({msg:'hello Saloni'})}
            </div>
        )
    }
}

export default Names