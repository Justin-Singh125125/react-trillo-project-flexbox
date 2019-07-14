import React from "react";

//import a main component 
import Copyright from "../Copyright";

//import sub component for side bar
import NavItem from "../../sub-components/Nav-Item";

//import the svg icons
import svgIcons from "../../img/sprite.svg";

const SideNavbar = props => {
    return (
        //because we do not have a parrent element because of the copyright
        <>
            <ul className="side-nav">
                <NavItem
                    //select the svg icon we want 
                    pathname="/"
                    href="#Hotel"
                    svgIcons={svgIcons}
                    svgSelection="icon-home"
                    spanText="Hotel"
                />
                <NavItem
                    //select the svg icon we want 
                    href="#Flight"
                    svgIcons={svgIcons}
                    svgSelection="icon-aircraft-take-off"
                    spanText="Flight"
                />
                <NavItem
                    //select the svg icon we want 
                    href="#Car rental"
                    svgIcons={svgIcons}
                    svgSelection="icon-key"
                    spanText="Car rental"
                />
                <NavItem
                    //select the svg icon we want 
                    href="#Tours"
                    svgIcons={svgIcons}
                    svgSelection="icon-map"
                    spanText="Tours"
                />
            </ul>

            <Copyright />
        </>
    )
}

export default SideNavbar;