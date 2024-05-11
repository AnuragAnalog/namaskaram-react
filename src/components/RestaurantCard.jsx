import React from "react"

import { MEDIA_API } from "/src/utils/constants"

function RestaurantCard(props) {
    const { id, name, cusinies, ratings, imgID, costForTwo } = props

    const trunc_names = name.length < 20 ? name : name.slice(0, 20)+"..."
    const trunc_cusinies = cusinies.join(", ").length < 30 ? cusinies.join(", ") : cusinies.join(", ").slice(0, 30)+"..."

    return <>
        <div key={id} className="flex flex-col hover:cursor-pointer hover:bg-gray-300 w-64 h-[400px] gap-5 shadow-xl bg-gray-100 rounded-xl">
            <img className="w-full h-[65%] self-center rounded-t-xl" src={MEDIA_API+imgID} alt="name"/>
            <div className="mx-2">
                <h3 className="m-0 text-xl font-bold font-sans"> {trunc_names} </h3>
                <h5 className="m-0"> {trunc_cusinies} </h5>
                <h5 className="m-0"> Rating: {ratings} </h5>
                <h5 className="m-0"> {costForTwo} </h5>
            </div>
        </div>
    </>
}

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <div>
                    <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted </label>
                    <RestaurantCard {...props} />
                </div>
            </>
        )
    }
}

export default RestaurantCard;