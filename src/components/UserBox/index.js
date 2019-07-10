import React from "react";

//component
import Image from "../Image";



const UserBox = (props) => {
    return (
        <div className={props.userClass}>
            <Image
                className={props.className}
                alt={props.alt}
                src={props.src}

            />
            <span class={props.spanClass}>{props.spanText}</span>
        </div>
    )
}

export default UserBox;