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
                <div className="flex flex-col gap-5 m-auto">
                    <h1 className="flex flex-col text-4xl">
                        <p className="m-auto"> Meet our Dev Team </p>
                    </h1>

                    <div className="flex flex-wrap w-9/12 m-auto gap-3">
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