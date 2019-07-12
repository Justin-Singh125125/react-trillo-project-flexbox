import React from "react";

//components
import Button from "../../sub-components/Button";
import SvgIcon from "../../sub-components/SvgIcon";

//svg icons



const SearchBar = (props) => {
    return (
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search Hotels" />
            <Button btnClass="search__button">
                <SvgIcon
                    svgClass="search__icon"
                    svgIcons={props.svgIcons}
                    svgSelection={props.svgSelection}
                />
            </Button>
        </form>
    )
}

export default SearchBar;