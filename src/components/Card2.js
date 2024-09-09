import React from "react";
import actor from '../images/actor.png';
function Card2(){
    return(
        <div className="card-container">
            <div className="profile-container">
            <div className="profile-image">
            <img className="image" src={actor}/>
            </div>
            <p className="name">Actor, Film Director</p>
            <p className="rate">$9/hour</p>
            </div>
            <div className="details-container">
                <p className="add1">Baltasar Kormakur, 52</p>
                <p className="add2">📍Reykjavik, Iceland</p>
                <p className="info">Icelandic actor, theater and film director, and film producer</p>
                <button className="cvbutton">VIEW CV</button>
                <button className="offer-button">MAKE OFFER</button>
                <p className="status">Last seen: 17 minutes ago</p>
            </div>
        </div>
    )
}
export default Card2;