import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Anurag Peddi",
                location: "United States of America",
                contact: "+1 (703) 459-6402"
            }
        }
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/AnuragAnalog")
        const data = await res.json()

        this.setState({
            userInfo: data
        })
    }

    render() {
        return (
            <>
                <div className="user-card">
                    <h2> Name: {this.state.userInfo.name} </h2>
                    <h3> Location: {this.state.userInfo.location} </h3>
                    <h4> Website: {this.state.userInfo.blog} </h4>
                </div>
            </>
        )
    }
}

export default UserClass;