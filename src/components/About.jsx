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
                <div className="m-auto">
                    <h1 className="flex flex-col m-auto text-4xl">
                        Meet our Dev Team
                    </h1>
                    {/* <div>
                        <UserContext.Consumer>
                            { (data) => {console.log(data)} }
                        </UserContext.Consumer>
                    </div> */}
                    <div className="flex flex-wrap w-10/12 m-auto gap-3">
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