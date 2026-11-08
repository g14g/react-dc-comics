import React, { Fragment } from "react";
import "./Header.css";

function Header() {
    const headerMenuObjects = [
        { id: 1, nome: "CHARACTERS", link: "#", class: "inactive" },
        { id: 1, nome: "COMICS", link: "#", class: "active" },
        { id: 1, nome: "MOVIES", link: "#", class: "inactive" },
        { id: 1, nome: "TV", link: "#", class: "inactive" },
        { id: 1, nome: "GAMES", link: "#", class: "inactive" },
        { id: 1, nome: "COLLECTIBLES", link: "#", class: "inactive" },
        { id: 1, nome: "VIDEOS", link: "#", class: "inactive" },
        { id: 1, nome: "FANS", link: "#", class: "inactive" },
        { id: 1, nome: "NEWS", link: "#", class: "inactive" },
        { id: 1, nome: "SHOP", link: "#", class: "inactive" },
    ];

    const headerMenu = headerMenuObjects.map((menu) => {
        return (
            <li key={menu.id}>
                <a href={menu.link} className={menu.class}>
                    {menu.nome}
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
