import React from "react"
import { Link } from "react-router-dom"

import logo from "/src/assets/logo.png"

import useCheckInternet from "/src/utils/useCheckInternet"
import NavItems from "/src/components/NavItems";

function Header() {
    const internetStatus = useCheckInternet()

    return <>
        <div className="flex row-auto justify-between shadow-lg bg-orange-50">
            <Link to="/" className="m-2">
                <span className="z-20 fixed top-20 left-24"> {internetStatus ? "🟢" : "🔴"} </span>
                <img className="z-10 w-28 h-28" src={logo} />
            </Link>
            <NavItems />
        </div>
    </>
}

export default Header;