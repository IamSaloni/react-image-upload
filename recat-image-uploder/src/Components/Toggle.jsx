import React from 'react'

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        }
    }

    handleOnClick(e){
        console.log("working")
        this.setState((prevState)=>({
                isToggleOn:!prevState.isToggleOn
        }))
    }
            render() {
                return (
                    <button onClick={(e)=>this.handleOnClick(e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                )
            }
}

export default Toggle