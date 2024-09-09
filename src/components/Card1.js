import React from "react";
import director from '../images/director.png';
function Card1(){
    return(
        <div className="card-container">
            <div className="profile-container">
            <div className="profile-image">
            <img src={director}/>
            </div>
            <p className="name">Film Director, Producer</p>
            <p className="rate">$14/hour</p>
            </div>
            <div className="details-container">
                <p className="add1">Jeffrey Abrams, 51</p>
                <p className="add2">📍New York, United States</p>
                <p className="info">Abrams was born in New York CITY and raised in Los Angeles</p>
                <button className="cvbutton">VIEW CV</button>
                <button className="offer-button">MAKE OFFER</button>
                <p className="status">🟢 Online</p>
            </div>
        </div>
    )
}
export default Card1;