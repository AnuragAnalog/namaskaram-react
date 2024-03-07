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
                <li> <Link to="/" className="link-element"> Home </Link> </li>
                <li> <Link to="/about" className="link-element"> About Us </Link> </li>
                <li> <Link to="/contact" className="link-element"> Contact </Link> </li>
                <li> <Link to="/cart" className="link-element"> Cart </Link> </li>

                <button onClick={handleClick}>
                    {logName}
                </button>
            </ul>
        </div> 
    </>
}

export default NavItems;