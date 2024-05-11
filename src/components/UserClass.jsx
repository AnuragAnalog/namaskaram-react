import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Anurag Peddi",
                location: "United States of America",
                contact: "+1 (703) 459-6402"
            },
            gitLink: props.gitLink,
        }
    }

    async componentDidMount() {
        const res = await fetch(this.state.gitLink)
        const data = await res.json()

        this.setState({
            userInfo: data,
            gitLink: this.state.gitLink
        })
    }

    render() {
        return (
            <>
                <div className="flex flex-col m-auto w-4/12 gap-5 p-4 border border-black rounded-lg bg-orange-100">
                    <img className="w-[95%] h-[75%] m-auto rounded-lg" src={this.state.userInfo.avatar_url} alt="User Avatar" />
                    <div className="flex flex-col m-2">
                        <h2 className="text-lg font-bold"> Name: {this.state.userInfo.name} </h2>
                        <h3 className=""> Location: {this.state.userInfo.location} </h3>
                        <h4 className="text-sm"> Website: {this.state.userInfo.blog} </h4>
                    </div>
                </div>
            </>
        )
    }
}

export default UserClass;