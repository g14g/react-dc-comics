import React, { Fragment } from "react";
// import "./BuyLink.css";

function BuyLink(props) {
    return (
        <React.Fragment>
            <a href={props.link}>
                <div className="buy-link">
                    <img src={props.img} alt="" />
                    <p>{props.name}</p>
                </div>
            </a>
        </React.Fragment>
    );
}

export default BuyLink;
