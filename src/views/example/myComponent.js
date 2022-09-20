import React from 'react'

class MyComponents extends React.Component{
    state = {
        name: 'Vinh'
    }
    render(){
        return(
            <div>Hello, {this.state.name}</div>
        )
    }
}

export default MyComponents;