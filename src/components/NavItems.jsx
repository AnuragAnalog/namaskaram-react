import { useState } from "react"
import { Link } from "react-router-dom"

import useCheckInternet from "/src/utils/useCheckInternet"

function NavItems() {
    const [logName, setLogName] = useState("LogIn")
    const internetStatus = useCheckInternet()

    function handleClick() {
        if (logName === "LogIn") {
            setLogName("LogOut")
        } else {
            setLogName("LogIn")
        }
    }

    return <>
        <div className="nav-items">
            <ul className="flex gap-5 p-6 m-6 text-xl">
                <li>Online Status {internetStatus ? "🟢" : "🔴"}</li>
                <li> <Link to="/" className="link-element"> Home </Link> </li>
                <li> <Link to="/about" className="link-element"> About Us </Link> </li>
                <li> <Link to="/contact" className="link-element"> Contact </Link> </li>
                <li> <Link to="/cart" className="link-element"> Cart </Link> </li>
                <li> <Link to="/grocery" className="link-element"> Grocery </Link> </li>

                <button onClick={handleClick}>
                    {logName}
                </button>
            </ul>
        </div> 
    </>
}

export default NavItems;