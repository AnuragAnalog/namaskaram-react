import React, { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

// import cart from "/src/assets/cart.png"
import userContext from "../utils/UserContext"
// import logo from "/src/assets/logo.png"
import useCheckInternet from "/src/utils/useCheckInternet"

function Header() {
    const internetStatus = useCheckInternet()
    const data = useContext(userContext)

    const cartItems = useSelector((store) => store.cart.items)

    function handleClick() {
        if (data.isLoggedIn) {
            data.setLoggedIn(false)
            data.setUserName("")
        }

        return <Navigate to="/login" />
    }

    return (
        <div className="flex flex-row justify-between mb-10 shadow-lg bg-orange-50">
            <Link to="/" className="m-2">
                <span className="z-20 absolute top-20 left-24"> {internetStatus ? "🟢" : "🔴"} </span>
                <img className="z-10 w-28 h-28" src={"/src/assets/logo.png"} />
            </Link>

            <div className="bottom-0">
                <ul className="flex gap-4 p-6 m-6 text-xl">
                    <li> <Link to="/" className="link-element"> Home </Link> </li>
                    <li> <Link to="/about" className="link-element"> About Us </Link> </li>
                    <li> <Link to="/contact" className="link-element"> Contact </Link> </li>
                    <li> <Link to="/grocery" className="link-element"> Grocery </Link> </li>
                    <li>
                        <Link to="/cart" className="flex flex-row gap-1 justify-center items-center link-element">
                            <img className="w-6 h-6" src={"/src/assets/cart.png"} /> {cartItems.length !== 0 ? cartItems.length+"Items" : ""}
                        </Link>
                    </li>
                    {data.isLoggedIn && <li> {"👤 " + data.loggedInUser} </li>}

                    {/* <Link to="/login"> */}
                        <button onClick={handleClick}>
                            {data.isLoggedIn ? "LogOut" : "LogIn"}
                        </button>
                    {/* </Link> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;