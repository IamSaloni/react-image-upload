import React from 'react'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            files: [],
            deleteFiles: []
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

    handleOnClick () {
        this.setState({
            files: this.state.files.filter((file)=>{
                return !(this.state.deleteFiles.includes(file.name))
            })
        }, this.setState({
            deleteFiles: []
        }))
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

    handleCheckbox (e, name) {
        if(e.target.checked){
            this.setState({
                deleteFiles: [...this.state.deleteFiles, name ]
            });
        }
        else {
            this.setState({
                deleteFiles: this.state.deleteFiles.filter((fileName)=>{
                    return fileName !== name
                })
            });
        }
    }
    render() {
        console.log(this.state.deleteFiles)
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
                <button style={ (this.state.deleteFiles.length) ? {} : {display:'none'}} onClick={() => this.handleOnClick()}>Delete</button>
                <div className="flex-container">
                    {this.state.files.map(({source, name}, index) => {
                        return (<div key={`image ${index + 1}`}  className="item">
                                    <img src={source} alt={ name }  />
                                    <div className="desc">
                                        <div className="caption"> { name } </div>
                                        <input type="checkbox" checked={this.state.deleteFiles.includes(name)} onChange={(event)=> this.handleCheckbox(event, name)}/>
                                    </div>
                                </div>);
                    })}
                </div>
            </div>
        )
    }
}

export default Upload