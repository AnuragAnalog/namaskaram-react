import { useState } from "react"
import { Link } from "react-router-dom"

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
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about"> About Us </Link> </li>
                <li> <Link to="/contact"> Contact </Link> </li>
                <li> <Link to="/cart"> Cart </Link> </li>

                <button onClick={handleClick}>
                    {logName}
                </button>
            </ul>
        </div> 
    </>
}

export default NavItems;