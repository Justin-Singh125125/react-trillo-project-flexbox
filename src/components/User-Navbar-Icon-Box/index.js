import React from "react";
import SvgIcon from "../SvgIcon";



const UserNavbarIconBox = (props) => {
    return (
        <div className={props.iconBoxClass}>
            <SvgIcon
                svgClass={props.svgClass}
                svgIcons={props.svgIcons}
                svgSelection={props.svgSelection}

            />
            <span class={props.spanClass}>{props.spanText}</span>
        </div>
    )
}

export default UserNavbarIconBox;