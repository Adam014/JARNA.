import React from "react"

export default function Note(props){ 
    const {author, title, text, date} = props.post;

    const formattedText = text.replace(/\n/g, "<br />"); 
    const formattedDate = date ? new Date(date.seconds * 1000).toLocaleString() : "";

    return (
        <div className="note">
            <hr />
            <div className="remove-icon-container">
                <i className="fa-solid fa-trash" onClick={props.onDelete}></i>
            </div>
            <div className="title">
                <h2 key={author}>Author: {author}</h2>
            </div>
            <h3>{title}</h3>
            <div
                dangerouslySetInnerHTML={{ __html: formattedText }}
                style={{ whiteSpace: "pre-line" }}
            />
            <div>
                <p>Date : {formattedDate}</p>
            </div>
            <hr /> 
        </div>
    )
}