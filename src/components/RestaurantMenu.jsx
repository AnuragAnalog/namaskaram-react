import { useState } from "react"
import { useParams } from "react-router-dom"
import Switch from "react-switch"

import { MEDIA_API } from "/src/utils/constants"
import ItemCategory from "./ItemCategory"
import NestedItemCategory from "./NestedItemCategory"
import useResData from "/src/utils/useResData"

function RestaurantMenu() {
    const { resId } = useParams()
    const [isVeg, setIsVeg] = useState(false)
    const [resInfo, itemInfo] = useResData(resId)

    return resInfo === null ? (
        <h1> Loading... </h1>
    ) :(
        <>
            <div className="flex flex-col gap-2 m-2">
                <div className="flex flex-row gap-3 m-5 w-[50%] self-center border-1 border-solid border-black">
                    <div className="flex flex-col gap-1 w-[50%] border border-solid border-black">
                        <h1 className="text-4xl font-extrabold m-0"> {resInfo.name} </h1>
                        <img className="w-[150px] h-[150px] rounded-[5%]" src={MEDIA_API+resInfo.cloudinaryImageId} alt="name"/>
                    </div>
                    <div className="flex flex-col gap-1 w-[50%]">
                        <h3 className="text-lg font-extrabold m-0 text-slate-500"> {resInfo.cuisines.join(", ")} </h3>
                        <ul>
                            <li> Ratings: {resInfo.avgRating} </li>
                            <li> {resInfo.veg ? "VEG" : "Non-veg"} </li>
                            <li> {resInfo.costForTwoMessage} </li>
                            <li> {resInfo.availability.opened ? "Open Until: "+resInfo.availability.nextCloseTime : "Closed"} </li>
                            <li> Location: {resInfo.locality+" | "+resInfo.areaName+" | "+resInfo.city} </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row gap-1 w-[50%] border border-solid border-black self-center p-[0.5%]">
                    <div className="text-xl font-extrabold mx-[0%] my-[-0.15%]"> Veg Only </div>
                    <Switch onChange={() => {setIsVeg(!isVeg)}} checked={isVeg} />
                </div>
                {
                    itemInfo.map((item) => {
                        if (item.card.card["@type"].endsWith(".ItemCategory")) {
                            return <ItemCategory
                                name={item.card.card.title}
                                items={item.card.card.itemCards}
                                onlyVeg={isVeg}
                            />
                        } else if (item.card.card["@type"].endsWith(".NestedItemCategory")) {
                            return <NestedItemCategory 
                                name={item.card.card.title}
                                categories={item.card.card.categories}
                                onlyVeg={isVeg}
                            />
                        }
                    })
                }
            </div>
        </>
    )
}

export default RestaurantMenu;