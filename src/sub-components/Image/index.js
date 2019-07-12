import React from "react";


const Image = (props) => {
    return (
        <img className={props.className} alt={props.alt} src={props.src}></img>
    )
}

export default Image;