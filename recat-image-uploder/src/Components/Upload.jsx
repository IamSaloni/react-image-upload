import React from 'react'

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef()
        this.imgOutput = React.createRef()
        this.state = {
            sources: []
        }
    }
    // componentDidMount() {
    //     console.log(this.fileInput.files);
    // }

    handleOnSubmit(event) {
        event.preventDefault();
    }


    handleOnchange(event) {
        console.log(event);
        console.log(this.fileInput.current.files);

        Object.keys(this.fileInput.current.files).forEach((key, index) => {
            let reader = new FileReader()
            reader.onload = (event) => {
                // this.imgOutput.current.src = event.target.result
                this.setState({
                    sources: [...this.state.sources, event.target.result]
                })

            }
            reader.readAsDataURL(this.fileInput.current.files[key])
        })


    }

    render() {
        return (
            <div>
                Upload Images
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input ref={this.fileInput} onChange={(event) => this.handleOnchange(event)} type="file" name="myFile" accept="image/png, image/jpeg ,image/jpg" multiple />
                </form>
                {this.state.sources.map((source, index) => {
                    return (<img key={index} src={source} alt={`image ${index + 1}`} />)
                })}

                <img ref={this.imgOutput} src="#" alt="My Image" />


            </div>
        )
    }
}

export default Upload