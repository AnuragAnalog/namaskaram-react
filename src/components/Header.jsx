import React from "react"
import { Link } from "react-router-dom"

import { LOGO_URL } from "/src/utils/constants";

import NavItems from "/src/components/NavItems";

function Header() {
    return <>
        <div className="flex row-auto justify-between shadow-lg bg-orange-50">
            <Link to="/" className="link-element">
                <img className="w-36 h-36" src={LOGO_URL} />
            </Link>
            <NavItems />
        </div>
    </>
}

export default Header;