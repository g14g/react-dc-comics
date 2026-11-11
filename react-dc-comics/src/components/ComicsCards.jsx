import React, { Fragment } from "react";
import "./ComicsCards.css";
import ComicsObj from "../data/ComicsObj";

// console.log(ComicsObj);

function ComicsCards() {
    const comicsCard = ComicsObj.map((comics) => {
        // if (comics.series == "Action Comics" || comics.series == "Catwoman") {
        //     return (
        //         <div key={comics.id} className="comics-card">
        //             <div className="img-wrapper">
        //                 <img className={"transform-scale"} src={comics.thumb} alt={comics.series} />
        //             </div>
        //             <p>{comics.series}</p>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div key={comics.id} className="comics-card">
        //             <div className="img-wrapper">
        //                 <img src={comics.thumb} alt={comics.series} />
        //             </div>
        //             <p>{comics.series}</p>
        //         </div>
        //     );
        // }
        let classTransform = false;
        if (comics.series == "Action Comics" || comics.series == "Catwoman") {
            // if (comics.series == "Action Comics") {
            classTransform = true;
        }

        return (
            <a key={comics.id} href="" className="comics-card">
                <div className="img-wrapper">
                    <img className={classTransform ? "transform-scale" : ""} src={comics.thumb} alt={comics.series} />
                </div>
                <p>{comics.series}</p>
            </a>
        );
    });

    const buyLinksObj = [
        { id: 1, name: "Digital Comics", imglink: "/buy-comics-digital-comics.png", pagelink: "#" },
        { id: 2, name: "Dc Merchandise", imglink: "/buy-comics-merchandise.png", pagelink: "#" },
        { id: 3, name: "Subscription", imglink: "/buy-comics-subscriptions.png", pagelink: "#" },
        { id: 4, name: "Comic Shop Locator", imglink: "/buy-comics-shop-locator.png", pagelink: "#" },
        { id: 5, name: "DC Power Visa", imglink: "/buy-dc-power-visa.svg", pagelink: "#" },
    ];

    const buyLinks = buyLinksObj.map((buylink) => {
        return (
            <a key={buylink.id} href={buylink.pagelink}>
                <div className="buy-link">
                    <img src={buylink.imglink} alt="" />
                    <p>{buylink.name}</p>
                </div>
            </a>
        );
    });

    return (
        <React.Fragment>
            <main>
                <div className="container">
                    <h2>CURRENT SERIES</h2>
                    <div className="cards-container">
                        {comicsCard}
                        {/* <div className="comics-card">
                            <div className="img-wrapper">
                                <img
                                    src="https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY"
                                    alt=""
                                />
                            </div>
                            <p>ACTION COMICS</p>
                        </div>
                        <div className="comics-card">ACTION COMICS</div>
                        <div className="comics-card">ACTION COMICS</div>
                        <div className="comics-card">ACTION COMICS</div>
                        <div className="comics-card">ACTION COMICS</div>
                        <div className="comics-card">ACTION COMICS</div>
                        <div className="comics-card">ACTION COMICS</div> */}
                    </div>
                    <div className="load-more">
                        <button>LOAD MORE</button>
                    </div>
                </div>
                <div className="buy-links-wrapper">
                    <div className="container">
                        <div className="buy-links-container">
                            {buyLinks}
                            {/* <div className="buy-link">
                                <img src="/buy-comics-digital-comics.png" alt="" />
                                <p>DIGITAL COMICS</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default ComicsCards;
