import React from "react";
import "./HeroStyles.css"


function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="heroImg" src={props.heroimg} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass} id='travelButton' >
                        {props.buttonText}
                    </a>
                </div>
            </div>

        </>
    );

}
export default Hero;