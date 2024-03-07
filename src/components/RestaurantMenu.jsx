import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Switch from "react-switch"

import { MENU_URL, MEDIA_API } from "/src/utils/constants"
import ItemCategory from "./ItemCategory"
import NestedItemCategory from "./NestedItemCategory"

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null)
    const [itemInfo, setItemInfo] = useState(null)
    const [isVeg, setIsVeg] = useState(false)
    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    async function fetchMenu() {
        const res = await fetch(MENU_URL+resId)
        const jsonData = await res.json()
        setItemInfo(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        setResInfo(jsonData.data.cards[0].card.card.info)
    }

    return resInfo === null ? (
        <h1> Loading... </h1>
    ) :(
        <>
            <div className="res-menu">
                <div className="res-menu-info">
                    <div className="res-menu-left">
                        <h1 className="res-menu-name"> {resInfo.name} </h1>
                        <img className="res-menu-img" src={MEDIA_API+resInfo.cloudinaryImageId} alt="name"/>
                    </div>
                    <div className="res-menu-right">
                        <h3 className="res-menu-cuisines"> {resInfo.cuisines.join(", ")} </h3>
                        <ul>
                            <li> Ratings: {resInfo.avgRating} </li>
                            <li> {resInfo.veg ? "VEG" : "Non-veg"} </li>
                            <li> {resInfo.costForTwoMessage} </li>
                            <li> {resInfo.availability.opened ? "Open Until: "+resInfo.availability.nextCloseTime : "Closed"} </li>
                            <li> Location: {resInfo.locality+" | "+resInfo.areaName+" | "+resInfo.city} </li>
                        </ul>
                    </div>
                </div>

                <div className="res-menu-veg-only">
                    <div className="res-menu-veg-only-name"> Veg Only </div>
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