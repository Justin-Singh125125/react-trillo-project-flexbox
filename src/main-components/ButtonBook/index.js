import React from "react";

const ButtonBook = props => {
    return (
        <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">Only 4 rooms left</span>
        </button>
    )
}

export default ButtonBook;