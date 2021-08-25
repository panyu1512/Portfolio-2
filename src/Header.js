import React from 'react'
import logo from "./images/logo.png"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <a class= "brand__name" href="#">ENRIQUE FERRER</a>
                <div className="header__nav">
                    <nav>
                        <a href="#">Contacto</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Github</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
