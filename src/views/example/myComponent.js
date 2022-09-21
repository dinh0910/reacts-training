import React from 'react'
import ChildComponents from './childComponent'

class MyComponents extends React.Component {
	state = {
		firstName: '',
		lastName: ''
	}
	handelOnChangeFN = (event) => {
		this.setState({
			firstName: event.target.value
		})
	}
	handelOnChangeLN = (event) => {
		this.setState({
			lastName: event.target.value
		})
	}
	handelOnClick = (event) => {
		event.preventDefault()
		console.log('>>> Check data values: ', this.state)
	}
	render() {
		console.log('>>> Call render: ', this.state)
		return (
			<>
				<form action="">
					<label htmlFor="fname">First name:</label><br />
					<input
						type="text"
						value={this.state.firstName}
						onChange={(event) => this.handelOnChangeFN(event)}
					/>
					<br />
					<label htmlFor="lname">Last name:</label><br />
					<input
						type="text"
						value={this.state.lastName}
						onChange={(event) => this.handelOnChangeLN(event)}
					/>
					<br /><br />
					<input type="submit" value="Submit" onClick={(event) => this.handelOnClick(event)} />
				</form>
				<ChildComponents name="Vinh" />
				<ChildComponents name = "Vinh1" />
				<ChildComponents name = "Vinh2" />
			</>
		)
	}
}

export default MyComponents;