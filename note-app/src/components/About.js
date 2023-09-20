import React from "react"
import Underline from "../images/underline.png"

export default function About(props){
    return(
        <div className={props.darkMode ? "dark-about-container": "about-container"}>
            <div className="about-card-container">
                <div className="about-card">
                    <div className="about-title-logo">
                        <h3>JARNA.</h3>
                        <img src={Underline} alt="about-logo-underline"/>
                    </div>
                    <h4>Jarna (alias ‘just a regular note app’) is a React.js project that is developt for a training purposes by Adam Stádník. If you have any questions or saw bug contact me <a href="https://www.instagram.com/kindastxd/">here.</a></h4>
                    <p>Web by Adam Stádník | Copyright © 2022 Adam Stádník. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}