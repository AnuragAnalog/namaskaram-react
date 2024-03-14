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
            <div className="flex flex-col m-2 gap-1">
                <div className="flex flex-row gap-4 w-[50%] h-52 self-center border border-solid border-black">
                    <div className="w-[70%] h-[100%] mx-1">
                        <img className="w-4 h-4 m-0" src={info.isVeg === 1 ? veg : nonveg} alt="veg"/>
                        <h4 className="font-extrabold m-0 text-base"> {info.name} </h4>
                        <p> {RUPEE_SYMBOL}{info.price / 100 || info.defaultPrice / 100} </p>
                        <br />
                        <p> {info.description} </p>
                    </div>
                    <div className="w-[25%] h-[100%]">
                        <img className="w-[100%] h-[100%] rounded-[5%]" src={info.imageId ? MEDIA_API+info.imageId : nofood} alt={info.imageId} />
                    </div>
                </div>
                <hr className="w-[50%] border border-solid border-gray-500 self-center"/>
            </div>
        </>
    )
}

export default ItemCard;