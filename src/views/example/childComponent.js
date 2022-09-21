import React from 'react'

class ChildComponents extends React.Component {
    render() {
        return (
            <>
                <div>Hello, It is {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponents;