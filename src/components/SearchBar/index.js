import React from "react";

//components
import Button from "../Button";
import SvgIcon from "../SvgIcon";

//svg icons



const SearchBar = (props) => {
    return (
        <form action="#" className={props.formClass}>
            <input type="text" className={props.inputClass} placeholder={props.placeholder} />
            <Button btnClass={props.btnClass}>
                <SvgIcon
                    svgClass={props.svgClass}
                    svgIcons={props.svgIcons}
                    svgSelection={props.svgSelection}
                />
            </Button>
        </form>
    )
}

export default SearchBar;