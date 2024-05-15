import { useState, useEffect } from "react"

import ItemCard from "/src/components/ItemCard";

function ItemCategory(props) {
    var vegCount = 0;
    const {name, items, onlyVeg, showItems} = props;
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
            <div className="flex flex-col w-full m-auto gap-0 shadow-lg rounded-xl bg-gray-200">
                    <div className="flex flex-row justify-between text-xl font-extrabold m-1 p-1 hover:cursor-pointer" onClick={props.changeShowIndex}>
                        <h3> {`${name.toUpperCase()} (${itemCount})`} </h3>
                        <img src={showItems ? "https://raw.githubusercontent.com/AnuragAnalog/namaskaram-react/main/src/assets/up-arrow.png" : "https://raw.githubusercontent.com/AnuragAnalog/namaskaram-react/main/src/assets/down-arrow.png"} className="w-7 h-7"></img>
                    </div>
                    {
                        showItems && items.map((item) => {
                            return <ItemCard 
                                        key={item.card.info.id}
                                        item={item.card.info}
                                        onlyVeg={onlyVeg}
                                />
                        })
                    }
            </div>
        </>
    )
}

export default ItemCategory;