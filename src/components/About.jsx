import React from "react"

import UserClass from "/src/components/UserClass"
import UserContext from "/src/utils/UserContext"

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("Component Mounted in Parent Component")
    }

    render() {
        return (
            <>
                <div>
                    <h1> About US </h1>
                    <div>
                        <UserContext.Consumer>
                            { (data) => {console.log(data)} }
                        </UserContext.Consumer>
                    </div>
                    <body>
                        This is the about page
                    </body>
                    <UserClass name="Anurag Peddi" location="United States of America" contact="+1 (703) 459-6402"/>
                </div>
            </>
        )
    }
}

export default About;