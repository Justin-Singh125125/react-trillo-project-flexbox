import React from "react";


const ReviewText = props => {
    return (
        <blockquote className="review__text">{props.userQuote}</blockquote>
    )
}

export default ReviewText;