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
            <div className="flex flex-col w-6/12 m-auto gap-0 shadow-lg bg-gray-100">
                {/* <Collapsible className="item-category-name" trigger={`${name.toUpperCase()} (${items.length})`}> */}
                    <div className="flex flex-row justify-between text-xl font-extrabold m-1 p-1">
                        <h3> {`${name.toUpperCase()} (${itemCount})`} </h3>
                        <span> 🔽 </span>
                    </div>
                    {
                        items.map((item) => {
                            return <ItemCard 
                                        key={item.card.info.id}
                                        item={item}
                                        onlyVeg={onlyVeg}
                                />
                        })
                    }
                {/* </Collapsible> */}
            </div>
        </>
    )
}

export default ItemCategory;