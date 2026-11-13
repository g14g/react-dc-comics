import React, { Fragment } from "react";
// import "./ComicsCard.css";

function ComicsCard(props) {
    // console.log("props:", props);
    return (
        <React.Fragment>
            <a href="" className="comics-card">
                <div className="img-wrapper">
                    <img className={props.classTransform ? "transform-scale" : ""} src={props.src} alt={props.series} />
                </div>
                <p>{props.series}</p>
            </a>
        </React.Fragment>
    );
}

export default ComicsCard;
