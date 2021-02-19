import React from 'react'
import logo from "../../../image/logo.png"
import "./header.css"


const Header = () => {
    return (
        <header>
            <div className="logo-contente">
                <img src={logo} alt="" />
            </div>
        </header>

    )
}

export default Header
