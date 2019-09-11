import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-list">
            <h1>NASA - Photo of the Day</h1>
            <h2>{props.title}</h2>
            <img className="nasa-image" alt="random nasa" src={props.url}></img>
            <p>Date: {props.date}</p>
            <p>Copyright: {props.copyright}</p>
            <p>Explanation: {props.explanation}</p> 
        </div>
    );
};

export default PhotoCard;