import { useState, useEffect } from "react"
import Collapsible from "react-collapsible";

import ItemCard from "./ItemCard";

function ItemCategory(props) {
    var vegCount = 0;
    const {name, items, onlyVeg} = props;
    const [itemCount, setItemCount] = useState(items.length);

    if (onlyVeg) {
        items.forEach((item) => {
            if (item.card.info.isVeg !== undefined) {
                vegCount += 1;
            }
        })
    }

    useEffect(() => {
        if (onlyVeg) {
            setItemCount(vegCount);
        } else {
            setItemCount(items.length);
        }
    }, [onlyVeg])

    return (
        <>
            <div className="item-category">
                {/* <Collapsible className="item-category-name" trigger={`${name.toUpperCase()} (${items.length})`}> */}
                    <h3 className="item-category-name"> {`${name.toUpperCase()} (${itemCount})`} </h3>
                    <p>
                        <ul>
                            {
                                items.map((item) => {
                                    return <ItemCard 
                                                key={item.card.info.id}
                                                item={item}
                                                onlyVeg={onlyVeg}
                                        />
                                })
                            }
                        </ul>
                    </p>
                {/* </Collapsible> */}
            </div>
        </>
    )
}

export default ItemCategory;