import React, { Fragment } from "react";

function FooterListMenu(props) {
    // console.log("props:", props.footerMenu);
    // console.log("menuItems:", props.footerMenu.menuItems);
    return (
        <div className="nav">
            <h3>{props.footerMenuObj.menuName}</h3>
            <ul>
                {props.footerMenuObj.menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                        <a href={menuItem.linkUrl}>{menuItem.linkName}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterListMenu;
