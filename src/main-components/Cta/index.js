import React from "react";

//main component
import ButtonBook from "../../main-components/ButtonBook";

const Cta = props => {
    return (
        <div className="cta">
            <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <ButtonBook />
        </div>
    )
}

export default Cta;