import React from "react";

//sub components
import SvgIcon from "../../sub-components/SvgIcon";

//main components
import InfiniteButton from "../InfiniteButton";

//sprites
import SvgIcons from "../../img/sprite.svg";


const Overview = props => {
    return (
        <div className="overview">
            <h1 className="overview__heading">
                Hotel Las Palmas
            </h1>
            <div className="overview__stars">
                <SvgIcon
                    svgClass="overview__icon-star"
                    svgIcons={SvgIcons}
                    svgSelection="icon-star"
                />
                <SvgIcon
                    svgClass="overview__icon-star"
                    svgIcons={SvgIcons}
                    svgSelection="icon-star"
                />
                <SvgIcon
                    svgClass="overview__icon-star"
                    svgIcons={SvgIcons}
                    svgSelection="icon-star"
                />
                <SvgIcon
                    svgClass="overview__icon-star"
                    svgIcons={SvgIcons}
                    svgSelection="icon-star"
                />
                <SvgIcon
                    svgClass="overview__icon-star"
                    svgIcons={SvgIcons}
                    svgSelection="icon-star"
                />
            </div>
            <div className="overview__location">
                <SvgIcon
                    svgClass="overview__icon-location"
                    svgIcons={SvgIcons}
                    svgSelection="icon-location-pin"
                />
                <InfiniteButton btnText="Albufeira, Portugal" />
            </div>

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>
    )
}

export default Overview;