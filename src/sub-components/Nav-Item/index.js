import React from "react";

//svg component, sub component
import SvgIcon from "../SvgIcon";

const NavItem = props => {
    return (
        <li
            className={window.location.pathname === props.pathname ?
                "side-nav__item side-nav__item--active" : "side-nav__item"
            }>
            <a href={props.href} className="side-nav__link">
                <SvgIcon
                    svgClass="side-nav__icon"
                    svgIcons={props.svgIcons}
                    svgSelection={props.svgSelection}
                />
                <span>{props.spanText}</span>
            </a>
        </li >
    )
}

export default NavItem;