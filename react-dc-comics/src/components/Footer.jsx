import React, { Fragment } from "react";
import "./Footer.css";

function Footer() {
    const footerMenuObj = [
        {
            id: 1,
            menuName: "DC COMICS",
            menuItems: [
                { id: 1, linkName: "Characters", linkUrl: "#" },
                { id: 2, linkName: "Comics", linkUrl: "#" },
                { id: 3, linkName: "Movies", linkUrl: "#" },
                { id: 4, linkName: "TV", linkUrl: "#" },
                { id: 5, linkName: "Games", linkUrl: "#" },
                { id: 6, linkName: "Videos", linkUrl: "#" },
                { id: 7, linkName: "News", linkUrl: "#" },
            ],
        },
        {
            id: 2,
            menuName: "SHOP",
            menuItems: [
                { id: 1, linkName: "Shop DC", linkUrl: "#" },
                { id: 2, linkName: "Shop DC Collectibles", linkUrl: "#" },
            ],
        },
        {
            id: 3,
            menuName: "DC",
            menuItems: [
                { id: 1, linkName: "Terms Of Use", linkUrl: "#" },
                { id: 2, linkName: "Privacy policy (New)", linkUrl: "#" },
                { id: 3, linkName: "Ad Choices", linkUrl: "#" },
                { id: 4, linkName: "Advertising", linkUrl: "#" },
                { id: 5, linkName: "Jobs", linkUrl: "#" },
                { id: 6, linkName: "Subscriptions", linkUrl: "#" },
                { id: 7, linkName: "Talent Workshops", linkUrl: "#" },
                { id: 8, linkName: "CPSC Certificates", linkUrl: "#" },
                { id: 9, linkName: "Ratings", linkUrl: "#" },
                { id: 10, linkName: "Shop Help", linkUrl: "#" },
                { id: 11, linkName: "Contact Us", linkUrl: "#" },
            ],
        },
        {
            id: 4,
            menuName: "SITES",
            menuItems: [
                { id: 1, linkName: "DC", linkUrl: "#" },
                { id: 1, linkName: "MAD Magazine", linkUrl: "#" },
                { id: 1, linkName: "DC Kids", linkUrl: "#" },
                { id: 1, linkName: "DC Universe", linkUrl: "#" },
                { id: 1, linkName: "DC Power Visa", linkUrl: "#" },
            ],
        },
    ];

    // function createMenuElements(menuItems) {
    //     menuItems.map((menuEl) => {
    //         console.log("Menu El:", menuEl.linkName);
    //         return (
    //             <li key={menuEl.id}>
    //                 <a href={menuEl.linkUrl}>{menuEl.linkName}</a>
    //             </li>
    //         );
    //     });
    // }

    // const footerMenuItems = [];
    const footerMenuName = footerMenuObj.map((menu) => {
        console.log("Menu Name:", menu.menuName);

        const menuItems = menu.menuItems.map((menuEl) => {
            console.log("Menu El:", menuEl.linkName);
            return (
                <li key={menuEl.id}>
                    <a href={menuEl.linkUrl}>{menuEl.linkName}</a>
                </li>
            );
        });

        console.log(menuItems);
        return (
            <div key={menu.id} className="nav">
                <h3>{menu.menuName}</h3>
                <ul>{menuItems}</ul>
            </div>
        );
    });

    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="nav-container">
                        <nav>
                            {footerMenuName}
                            {/* <div className="nav">
                                <h3>LISTA 1</h3>
                                <ul>
                                    <li>
                                        <a href="#">Pippo</a>
                                    </li>
                                    <li>
                                        <a href="#">Pluto</a>
                                    </li>
                                    <li>
                                        <a href="#">Paperino</a>
                                    </li>
                                    <li>
                                        <a href="#">Topolino</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav">
                                <h3>LISTA 2</h3>
                                <ul>
                                    <li>
                                        <a href="#">Pippo</a>
                                    </li>
                                    <li>
                                        <a href="#">Pluto</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav">
                                <h3>LISTA 3</h3>
                                <ul>
                                    <li>
                                        <a href="#">Pippo</a>
                                    </li>
                                    <li>
                                        <a href="#">Pluto</a>
                                    </li>
                                    <li>
                                        <a href="#">Paperino</a>
                                    </li>
                                    <li>
                                        <a href="#">Topolino</a>
                                    </li>
                                    <li>
                                        <a href="#">Pippo</a>
                                    </li>
                                    <li>
                                        <a href="#">Pluto</a>
                                    </li>
                                    <li>
                                        <a href="#">Paperino</a>
                                    </li>
                                    <li>
                                        <a href="#">Topolino</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav">
                                <h3>LISTA 4</h3>
                                <ul>
                                    <li>
                                        <a href="#">Pippo</a>
                                    </li>
                                    <li>
                                        <a href="#">Pluto</a>
                                    </li>
                                    <li>
                                        <a href="#">Paperino</a>
                                    </li>
                                    <li>
                                        <a href="#">Topolino</a>
                                    </li>
                                </ul>
                            </div> */}
                        </nav>
                        <div className="dc-footer-logo"></div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
