import React from "react";


const InfiniteButton = (props) => {
    return (
        <button type="button" className="btn-inline">
            {props.btnText}
            {props.arrow ? <span>&rarr;</span> : ""}
        </button>
    )
}

export default InfiniteButton;