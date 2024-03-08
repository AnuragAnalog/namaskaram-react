import React from "react"

import User from "./User"
import UserClass from "./UserClass"

function About() {
    return (
        <>
            <div>
                <h1> About US </h1>
                <body>
                    This is the about page
                </body>
                <User name="Theertha Peddi" location="Nirmal" contact="+1 (703) 459-6402"/>
                <UserClass name="Anurag Peddi" location="United States of America" contact="+1 (703) 459-6402"/>
            </div>
        </>
    )
}

export default About;