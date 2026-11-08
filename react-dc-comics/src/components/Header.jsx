import React, { Fragment } from "react";
import "./Header.css";

function Header() {
    const headerMenuObjects = [
        { id: 1, name: "CHARACTERS", link: "#", class: "inactive" },
        { id: 2, name: "COMICS", link: "#", class: "active" },
        { id: 3, name: "MOVIES", link: "#", class: "inactive" },
        { id: 4, name: "TV", link: "#", class: "inactive" },
        { id: 5, name: "GAMES", link: "#", class: "inactive" },
        { id: 6, name: "COLLECTIBLES", link: "#", class: "inactive" },
        { id: 7, name: "VIDEOS", link: "#", class: "inactive" },
        { id: 8, name: "FANS", link: "#", class: "inactive" },
        { id: 9, name: "NEWS", link: "#", class: "inactive" },
        { id: 10, name: "SHOP", link: "#", class: "inactive" },
    ];

    const headerMenu = headerMenuObjects.map((menu) => {
        return (
            <li key={menu.id}>
                <a href={menu.link} className={menu.class}>
                    {menu.name}
                </a>
            </li>
        );
    });

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="header-container">
                        <div className="logo">
                            <a href="#">
                                <img src="/dc-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul>{headerMenu}</ul>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
