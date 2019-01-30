import React from 'react'

class Upload extends React.Component {

    handleOnSubmit(event){
        event.preventDefault();
}

    render() {
        
        return (
            <div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                  <input type="file" name="myFile" multiple />
                </form>
               
            </div>
        )
    }
}

export default Upload