import React from "react";

//sub-components
import Image from "../../sub-components/Image";



const Logo = (props) => {
    return (
        <Image src={props.src} alt={props.alt} className="logo" />
    )
}

export default Logo;