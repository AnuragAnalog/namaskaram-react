import { useState } from "react"

function NavItems() {
    const [logName, setLogName] = useState("LogIn")
    function handleClick() {
        if (logName === "LogIn") {
            setLogName("LogOut")
        } else {
            setLogName("LogIn")
        }
    }

    return <>
        <div className="nav-items">
            <ul>
                <li> Home </li>
                <li> About Us </li>
                <li> Contact </li>
                <li> Cart </li>
                <button onClick={handleClick}>
                    {logName}
                </button>
            </ul>
        </div> 
    </>
}

export default NavItems;