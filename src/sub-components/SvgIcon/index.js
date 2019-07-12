import React from "react";


const SvgIcon = (props) => {
    return (
        <svg className={props.svgClass}>
            {/* a little trick to load in svg items */}
            <use xlinkHref={`${props.svgIcons}#${props.svgSelection}`} />
        </svg>
    )
}

export default SvgIcon;