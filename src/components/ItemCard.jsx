import React from "react"

import { RUPEE_SYMBOL, MEDIA_API } from "/src/utils/constants"
import nofood from "/src/assets/no-food-img.png"
import veg from "/src/assets/veg-symbol.png"
import nonveg from "/src/assets/non-veg-symbol.png"

function ItemCard(props) {
    const { id, item, onlyVeg } = props
    const { info } = item.card

    return onlyVeg && info.isVeg === undefined ? (<>
    </>) : (
        <>
            <div key={id} className="flex flex-col m-2 gap-1">
                <div className="flex flex-row gap-4 w-[100%] h-52 justify-between border border-solid border-black">
                    <div className="w-[70%] h-[100%] mx-1">
                        <img className="w-4 h-4 m-0" src={info.isVeg === 1 ? veg : nonveg} alt="veg"/>
                        <div className="font-extrabold m-0 text-base"> {info.name} </div>
                        <p> {RUPEE_SYMBOL}{info.price / 100 || info.defaultPrice / 100} </p>
                        <br />
                        <p> {info.description} </p>
                    </div>
                    <div className="w-[25%] h-[100%] content-center flex flex-col">
                        <div className="absolute">
                            <button className="p-2 rounded-lg bg-gray-50 shadow-lg"> Add + </button>
                        </div>
                        <img className="w-[80%] h-[80%] rounded-[5%]" src={info.imageId ? MEDIA_API+info.imageId : nofood} alt={info.imageId} />
                    </div>
                </div>
                <hr className="w-[100%] border border-solid border-gray-500 self-center"/>
            </div>
        </>
    )
}

export default ItemCard;