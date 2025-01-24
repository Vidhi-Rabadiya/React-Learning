import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 2
        }
    }

    render() {
        return <div className="userContainer">
            <h2>count: {this.state.count}</h2>
            <button onClick={() => {
                this.setState({ count: this.state.count + 1 })
            }}>click</button>
            <h3>Name: {this.props.name}</h3>
            <h3>Location: {this.props.location}</h3>
            <h3>Contact: {this.props.contact}</h3>
        </div>
    }
}

export default UserClass