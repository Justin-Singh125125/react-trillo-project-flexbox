import React from "react";

//sub-component
import Image from "../Image";



const UserBox = (props) => {
    return (
        <div className="user-nav__user">
            <Image
                className="user-nav__user-photo"
                alt="User photo"
                src={props.src}

            />
            <span class="user-nav__user-name">{props.spanText}</span>
        </div>
    )
}

export default UserBox;