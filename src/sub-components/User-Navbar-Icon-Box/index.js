import React from "react";
import SvgIcon from "../SvgIcon";



const UserNavbarIconBox = (props) => {
    return (
        <div className="user-nav__icon-box">
            <SvgIcon
                svgClass="user-nav__icon"
                svgIcons={props.svgIcons}
                svgSelection={props.svgSelection}

            />
            <span class="user-nav__notification">{props.spanText}</span>
        </div>
    )
}

export default UserNavbarIconBox;