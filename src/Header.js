import React from 'react'
import logo from "./images/logo.png"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <a class= "brand__name" href="/home">ENRIQUE FERRER AGIUS</a>
                <div className="header__nav">
                    <nav>
                        <a href="/contacto">Contact</a>
                        <a href="/#proyectos">Proyects</a>
                        <a href="https://github.com/panyu1512?tab=repositories">Github</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
