import React from 'react'

const fromatName = (user)=>{
        return user.firstName + ' '+ user.lastName;
}

const user = {
    firstName:'Saloni',
    lastName:'Sharma'
}

class Name extends React.Component {
    render(){
        return (
            <h1>Hello {fromatName(user)}</h1>
        )
    }
}

export default Name
