import React from "react";

//sub component
import Image from "../../sub-components/Image";

//photos
import Photo_3 from "../../img/user-3.jpg";
import Photo_4 from "../../img/user-4.jpg";
import Photo_5 from "../../img/user-5.jpg";
import Photo_6 from "../../img/user-6.jpg";

const Recommended = props => {
    return (
        <div className="recommend">
            <p className="recommend__count">
                Lucy and 3 other friends recommend this hotel
            </p>
            <div className="recommend__friends">
                <Image src={Photo_3} alt="Friend 1" className="recommend__photo" />
                <Image src={Photo_4} alt="Friend 2" className="recommend__photo" />
                <Image src={Photo_5} alt="Friend 3" className="recommend__photo" />
                <Image src={Photo_6} alt="Friend 4" className="recommend__photo" />
            </div>
        </div>
    )
}

export default Recommended;