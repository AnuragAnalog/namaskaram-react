import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { RUPEE_SYMBOL, MEDIA_API } from "/src/utils/constants"
import { addItem } from "/src/utils/cartSlice"
// import nofood from "/src/assets/no-food-img.png"
// import veg from "/src/assets/veg-symbol.png"
// import nonveg from "/src/assets/non-veg-symbol.png"

function ItemCard(props) {
    const { key, item, onlyVeg } = props

    const dispatcher = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)

    function addToCart(itemInfo) {
        // Dispatch an action
        dispatcher(addItem({
            key: itemInfo.id,
            item: itemInfo,
            onlyVeg: Number(item.isVeg !== undefined)
        }))
    }

    return onlyVeg && item.isVeg === undefined ? (<>
    </>) : (
        <>
            <div key={key} data-testid="food-item" className="flex flex-col m-2 gap-1">
                <div className="flex flex-row gap-4 w-[100%] h-52 justify-between">
                    <div className="w-[70%] h-[100%] mx-1">
                        <img className="w-4 h-4 m-0" src={item.isVeg === 1 ? "/src/assets/veg-symbol.png" : "/src/assets/veg-symbol.png"} alt="veg"/>
                        <div className="font-extrabold m-0 text-base"> {item.name} </div>
                        <p> {RUPEE_SYMBOL}{item.price / 100 || item.defaultPrice / 100} </p>
                        <br />
                        <p> {item.description} </p>
                    </div>
                    <div className="w-[25%] justify-center items-center flex flex-col">
                        <div className="absolute">
                            <button className="p-2 rounded-lg bg-white hover:bg-gray-200 text-green-700 font-extrabold shadow-lg" onClick={() => addToCart(item)}>
                                 Add +
                            </button>
                        </div>
                        <img className="w-[80%] h-[80%] rounded-[5%]" src={item.imageId ? MEDIA_API+item.imageId : "/src/assets/veg-symbol.png"} alt={item.imageId} />
                    </div>
                </div>
                <hr className="w-[100%] border border-solid border-gray-500 self-center"/>
            </div>
        </>
    )
}

export default ItemCard;