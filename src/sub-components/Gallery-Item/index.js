import React from "react";

//sub component
import Image from "../Image";

const GalleryItem = props => {
    return (
        <figure className="gallery__item">
            <Image
                className="gallery__photo"
                alt={props.alt}
                src={props.src}
            />
        </figure>
    )
}

export default GalleryItem;