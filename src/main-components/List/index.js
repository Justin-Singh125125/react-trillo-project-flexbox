import React from "react";

//sub components
import ListItem from "../../sub-components/List-Item";


const List = props => {
    return (
        <ul className="list">
            <ListItem itemText="Close to the Beach" />
            <ListItem itemText="Breakfast included" />
            <ListItem itemText="Free airport shuttle" />
            <ListItem itemText="Free wifi in all rooms" />
            <ListItem itemText="Air conditioning and heating" />
            <ListItem itemText="Pets allowed" />
            <ListItem itemText="We speak all languages" />
            <ListItem itemText="Perfect for families" />
        </ul>
    )
}

export default List;