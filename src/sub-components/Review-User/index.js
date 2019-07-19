import React from "react";

//sub components
import Image from "../Image";

const ReviewUser = props => {
    return (
        <figcaption className="review__user">
            <Image src={props.src} alt={props.alt} className="review__photo" />
            <div className="review__user-box">
                <p className="review__user-name">{props.userName}</p>
                <p className="review__user-date">{props.userDate}</p>
            </div>
            <div className="review__rating">{props.userRating}</div>
        </figcaption>
    )
}

export default ReviewUser;