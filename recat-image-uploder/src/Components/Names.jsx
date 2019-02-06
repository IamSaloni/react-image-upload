import React from 'react'

const Message = (props)=>
  <div>{props.msg}</div>



class Names extends React.Component {
    
    render(){
        return (
            <div>
              <Message msg="hello world"/>
              <Message msg="hey" />
            </div>
        )
    }
}

export default Names