import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 13
        }
    }
    render() {
        return (
            <>
                <div className="user-card">
                    <h2> Name: {this.props.name}-{this.state.count} </h2>
                    <h3> Location: {this.props.location} </h3>
                    <h4> Contact: {this.props.contact} </h4>
                    <button onClick={() => {
                        this.setState({count: this.state.count + 1})
                    }}> Count Increase </button>
                </div>
            </>
        )
    }
}

export default UserClass;