import { useState, useEffect } from "react"
import Collapsible from "react-collapsible";

import ItemCard from "/src/components/ItemCard";

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
            <div className="flex flex-col gap-0 m-1">
                {/* <Collapsible className="item-category-name" trigger={`${name.toUpperCase()} (${items.length})`}> */}
                    <h3 className="text-xl m-0 font-extrabold self-center"> {`${name.toUpperCase()} (${itemCount})`} </h3>
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
                {/* </Collapsible> */}
            </div>
        </>
    )
}

export default ItemCategory;