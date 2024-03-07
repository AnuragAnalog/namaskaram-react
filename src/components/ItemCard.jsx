import React from "react"

import { RUPEE_SYMBOL, MEDIA_API } from "../utils/constants"
import nofood from "../assets/no-food-img.png"
import veg from "../assets/veg-symbol.png"
import nonveg from "../assets/non-veg-symbol.png"

function ItemCard(props) {
    const { id, item, onlyVeg } = props
    const { info } = item.card

    return onlyVeg && info.isVeg === undefined ? (<>
    </>) : (
        <>
            <div className="item-card">
                <div className="item-card-content">
                    <div className="item-card-left">
                        <img className="item-card-veg-option" src={info.isVeg === 1 ? veg : nonveg} alt="veg"/>
                        <h4 className="item-card-dish-name"> {info.name} </h4>
                        <p> {RUPEE_SYMBOL}{info.price / 100 || info.defaultPrice / 100} </p>
                        {/* <br /> */}
                        <p> {info.description} </p>
                    </div>
                    <div className="item-card-right">
                        <img className="item-card-img" src={info.imageId ? MEDIA_API+info.imageId : nofood} alt={info.imageId} />
                    </div>
                </div>
                <hr className="item-card-hr"/>
            </div>
        </>
    )
}

export default ItemCard;