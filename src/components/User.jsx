import { useState } from "react"

function User(props) {
    const {name, location, contact} = props;
    const [count, setCount] = useState(13);

    return (
        <>
            <div className="user-card">
                <h2> Name: {name}-{count} </h2>
                <h3> Location: {location} </h3>
                <h4> Contact: {contact} </h4>
            </div>
        </>
    )
}

export default User;