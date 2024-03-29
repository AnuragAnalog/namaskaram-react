import React from "react"

import UserClass from "/src/components/UserClass"
import UserContext from "/src/utils/UserContext"
import { DEV_INFO } from "../utils/constants"

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
                    <div className="flex flex-wrap w-full m-auto gap-3 border border-black">
                        {DEV_INFO.map((url) => {
                            return <UserClass gitLink={url}/>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default About;