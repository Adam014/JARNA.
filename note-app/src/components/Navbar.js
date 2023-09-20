import React from "react"
import Underline from "../images/underline.png"

export default function Navbar(props){
    return ( 
        <nav className={props.darkMode ? "dark-navbar": ""}>
            <div className={props.darkMode ? "dark-top-container": "top-container"}>
                <div className="socials">
                    <a href="https://www.instagram.com/kindastxd/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/adam.stadnik.319"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/adam-stádník-271280218/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://discordapp.com/users/kindast"><i className="fa-brands fa-discord"></i></a>
                </div>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </div>
            <div className={props.darkMode ? "dark-nav": "nav"}>
                <div className="title-logo">
                    <h3>JARNA.</h3>
                    <img src={Underline} alt="logo-underline"/>
                </div>
            </div>
        </nav>
    )
}