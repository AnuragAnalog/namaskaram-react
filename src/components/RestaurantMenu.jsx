import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { MENU_URL } from "/src/utils/constants"
import ItemCategory from "./ItemCategory"
import NestedItemCategory from "./NestedItemCategory"

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null)
    const [itemInfo, setItemInfo] = useState(null)
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
            <div className="menu">
                <h1> {resInfo.name} </h1>
                <img style={{width: 150, height: 150}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resInfo.cloudinaryImageId} alt="name"/>
                <h2> {resInfo.cuisines.join(", ")} </h2>
                <ul>
                    <li> Ratings: {resInfo.avgRating} </li>
                    <li> {resInfo.veg ? "VEG" : "Non-veg"} </li>
                    <li> {resInfo.costForTwoMessage} </li>
                    <li> {resInfo.availability.opened ? "Open Until: "+resInfo.availability.nextCloseTime : "Closed"} </li>
                    <li> Location: {resInfo.locality+" | "+resInfo.areaName+" | "+resInfo.city} </li>
                </ul>

                <h2> Menu </h2>
                {
                    itemInfo.map((item) => {
                        if (item.card.card["@type"].endsWith(".ItemCategory")) {
                            return <ItemCategory
                                name={item.card.card.title}
                                items={item.card.card.itemCards}
                            />
                        } else if (item.card.card["@type"].endsWith(".NestedItemCategory")) {
                            return <NestedItemCategory 
                                name={item.card.card.title}
                                categories={item.card.card.categories}
                            />
                        }
                    })
                }
            </div>
        </>
    )
}

export default RestaurantMenu;