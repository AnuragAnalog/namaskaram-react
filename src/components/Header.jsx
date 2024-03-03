import React from "react"

import { LOGO_URL } from "/src/utils/constants";

function Header() {
    return <>
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
    </>
}

export default Header;