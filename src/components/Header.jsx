import React from "react"

import { LOGO_URL } from "/src/utils/constants";

import NavItems from "/src/components/NavItems";

function Header() {
    return <>
        <div className="flex row-auto justify-between">
            <img className="w-56" src={LOGO_URL} />
            <NavItems />
        </div>
    </>
}

export default Header;