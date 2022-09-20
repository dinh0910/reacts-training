import React from 'react'

class MyComponents extends React.Component{
    state = {
        name: 'Vinh'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <>
                <input value={this.state.name} typet="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                />
                <div>Hello, {this.state.name}</div>
            </>
            
        )
    }
}

export default MyComponents;