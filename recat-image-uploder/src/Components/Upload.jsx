import React from 'react'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            files: []
        }
        this.pushFileInState = this.pushFileInState.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();
    }

    pushFileInState(evt, file) {
        this.setState({
            files: [...this.state.files, {
                source: evt.target.result,
                name: file.name
               
            }]
        })
    }

    handleOnchange(event) {
        Object.keys(this.fileInput.current.files).forEach((key) => {
            let reader = new FileReader()
            reader.onload = ((file) => {
                return (event) => {
                    this.pushFileInState(event, file)
                  };

            })(this.fileInput.current.files[key]);
            reader.readAsDataURL(this.fileInput.current.files[key])
        })
    }

    handleOnClick(event, name) {
            console.log(name);
            this.setState({
                files: this.state.files.filter((file)=>{
                            return name !== file.name
                })
            })
    }

    render() {
        return (
            <div>
                Upload Images
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input ref={this.fileInput}
                        onChange={(event) => this.handleOnchange(event)}
                        type="file"
                        name="myFile"
                        accept="image/png, image/jpeg ,image/jpg"
                        multiple
                        className="browse-button"/>
                </form>
                <div className="flex-container">
                    {this.state.files.map(({source, name}, index) => {
                        return (<div key={`image ${index + 1}`}  className="item">
                                    <img src={source} alt={`image ${index + 1}`}  />
                                    <div className="desc">
                                        <div className="caption"> { name } </div>
                                        <button onClick={(event)=>{this.handleOnClick(event,name)}}>Delete</button>
                                    </div>
                                </div>);
                    })}
                </div>
            </div>
        )
    }
}

export default Upload