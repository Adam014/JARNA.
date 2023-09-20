import React from "react"

export default function Circle(props){
    return (
         <div className={props.darkMode ? "dark-circle-container" : "circle-container"} >
            <div
                className={`circle ${props.activeComponent === "Main" ? "circle-clicked" : ""}`}
                onClick={() => props.handleComponentChange("Main")}
            >
                <p>Home</p>
            </div>
            <div
                className={`circle ${props.activeComponent === "About" ? "circle-clicked" : ""}`}
                onClick={() => props.handleComponentChange("About")}
            >
                <p>About</p>
            </div>
            <div
                className={`circle ${props.activeComponent === "News" ? "circle-clicked" : ""}`}
                onClick={() => props.handleComponentChange("News")}
            >
                <p>News</p>
            </div>
            <div
                className={`circle ${props.activeComponent === "Analytics" ? "circle-clicked" : ""}`}
                onClick={() => props.handleComponentChange("Analytics")}
            >
                <p>Analytics</p>
            </div>
        </div>
    )   
}
