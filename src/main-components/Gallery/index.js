import React from "react";

//images
import HotelPhoto_1 from "../../img/hotel-1.jpg";
import HotelPhoto_2 from "../../img/hotel-2.jpg";
import HotelPhoto_3 from "../../img/hotel-3.jpg";

//sub components
import GalleryItem from "../../sub-components/Gallery-Item";

const Gallery = props => {
    return (
        <div className="gallery">
            <GalleryItem
                src={HotelPhoto_1}
                alt="Photo of hotel 1"
            />
            <GalleryItem
                src={HotelPhoto_2}
                alt="Photo of hotel 2"
            />
            <GalleryItem
                src={HotelPhoto_3}
                alt="Photo of hotel 3"
            />
        </div>
    )
}

export default Gallery;