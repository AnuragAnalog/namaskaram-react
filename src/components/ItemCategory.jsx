import React from "react"

import ItemCard from "./ItemCard";

function ItemCategory(props) {
    const {name, items} = props;

    return (
        <>
            <div>
                <h3> {name.toUpperCase()} </h3>
                <p>
                    <ul>
                        {
                            items.map((item) => {
                                return <ItemCard key={item.card.info.id} item={item} />
                                return <li key={index}> {item.card.info.name} </li>
                            })
                        }
                    </ul>
                </p>
            </div>
        </>
    )
}

export default ItemCategory;