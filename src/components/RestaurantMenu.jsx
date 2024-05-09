import { useState } from "react"
import { useParams } from "react-router-dom"
import Switch from "react-switch"

import { MEDIA_API } from "/src/utils/constants"
import ItemCategory from "/src/components/ItemCategory"
import NestedItemCategory from "/src/components/NestedItemCategory"
import useResData from "/src/utils/useResData"

import star from "/src/assets/star.png"
import { ShimmerResCard } from "/src/components/Shimmer"

function RestaurantMenu() {
    const { resId } = useParams()
    const [isVeg, setIsVeg] = useState(false)
    const [showIndex, setShowIndex] = useState(null)
    const [resInfo, itemInfo] = useResData(resId)

    function checkSameIndex(index) {
        if (showIndex === index) {
            setShowIndex(null)
        } else {
            setShowIndex(index)
        }
    }

    console.log(resInfo)

    return resInfo === null ? (
        <ShimmerResCard />
    ) :(
        <>
            <div className="flex flex-col gap-2 m-2">
                <h1 className="text-4xl font-extrabold m-auto"> {resInfo.name} </h1>
                <div className="flex flex-col gap-1 w-9/12 h-[300px] m-auto justify-center items-center">
                    <img className="w-full h-full object-none rounded-xl" src={MEDIA_API+resInfo.cloudinaryImageId} alt="name"/>
                </div>
                <div className="flex flex-row gap-3 m-auto w-9/12 self-center">
                    <h3 className="text-lg font-extrabold w-9/12 text-slate-500"> {resInfo.cuisines.join(", ")} </h3>
                </div>
                <div className="flex flex-row gap-3 m-auto w-9/12 self-center">
                    <div className="flex flex-row text-sm gap-2 justify-center items-center">
                        <p className="text-gray-500 font-semibold flex flex-row justify-center items-center">
                            {resInfo.avgRating}
                            <img className="w-6 h-4" src={star} alt="star"/>
                        </p>
                        <p className="text-gray-500 font-semibold"> {resInfo.veg ? "VEG" : "Non-veg"} </p>
                        <p className="text-gray-500 font-semibold"> {resInfo.costForTwoMessage} </p>
                        <p className="text-gray-500 font-semibold"> {resInfo.availability.opened ? "Open Until: "+resInfo.availability.nextCloseTime : "Closed"} </p>
                        <p className="text-gray-500 font-semibold"> {resInfo.locality+" | "+resInfo.areaName+" | "+resInfo.city} </p>
                    </div>
                </div>

                <div className="flex flex-row gap-1 w-9/12 self-center p-[0.5%]">
                    <div className="text-xl font-extrabold mx-[0%] my-[-0.15%]"> Veg Only </div>
                    <Switch onChange={() => {setIsVeg(!isVeg)}} checked={isVeg} />
                </div>

                <div className="flex flex-col gap-3">
                    {
                        itemInfo.map((item, index) => {
                            if (item.card.card["@type"].endsWith(".ItemCategory")) {
                                // Controlled Component or Lifting State Up
                                return <ItemCategory
                                    name={item.card.card.title}
                                    items={item.card.card.itemCards}
                                    onlyVeg={isVeg}
                                    showItems={index === showIndex ? true : false}
                                    changeShowIndex={() => checkSameIndex(index)}
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
            </div>
        </>
    )
}

export default RestaurantMenu;