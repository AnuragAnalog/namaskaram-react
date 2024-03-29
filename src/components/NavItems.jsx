import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import cart from "/src/assets/cart.png"
import userContext from "../utils/UserContext"
import useCheckInternet from "/src/utils/useCheckInternet"

function NavItems() {
    const [logName, setLogName] = useState("LogIn")
    const internetStatus = useCheckInternet()
    const data = useContext(userContext)

    const cartItems = useSelector((store) => store.cart.items)

    function handleClick() {
        if (logName === "LogIn") {
            setLogName("LogOut")
        } else {
            setLogName("LogIn")
        }
    }

    return <>
        <div className="nav-items">
            <ul className="flex gap-5 p-6 m-6 text-xl align-middle">
                <li>Online Status {internetStatus ? "🟢" : "🔴"}</li>
                <li> <Link to="/" className="link-element"> Home </Link> </li>
                <li> <Link to="/about" className="link-element"> About Us </Link> </li>
                <li> <Link to="/contact" className="link-element"> Contact </Link> </li>
                <li> <Link to="/grocery" className="link-element"> Grocery </Link> </li>
                <li>
                    <Link to="/cart" className="flex flex-row gap-1 justify-center items-center link-element">
                        <img className="w-6 h-6" src={cart}></img> {cartItems.length !== 0 ? cartItems.length+"Items" : ""}
                    </Link>
                </li>
                {logName === "LogOut" && <li> {"👤 " + data.loggedInUser} </li>}

                <button onClick={handleClick}>
                    {logName}
                </button>
            </ul>
        </div> 
    </>
}

export default NavItems;