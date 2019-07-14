import React from "react";

//svg component, sub component
import SvgIcon from "../SvgIcon";

const NavItem = props => {
    return (
        <li className="side-nav__item">
            <a href={props.href} className="side-nav__link">
                <SvgIcon
                    svgClass="side-nav__icon"
                    svgIcons={props.svgIcons}
                    svgSelection={props.svgSelection}
                />
                <span>{props.spanText}</span>
            </a>
        </li>
    )
}

export default NavItem;