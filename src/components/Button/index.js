import React from "react";


const Button = (props) => {
    return (
        <button className={props.btnClass}>{props.children}</button>
    )
}

export default Button;