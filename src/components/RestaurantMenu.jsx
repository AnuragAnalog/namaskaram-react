import { useState, useEffect } from "react"

import { MENU_URL } from "/src/utils/constants"

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    async function fetchMenu() {
        const res = await fetch(MENU_URL+"623059")
        const jsonData = await res.json()
        var tempData = jsonData.data.cards[0].card.card.info
        setResInfo(tempData)
        console.log(tempData)
    }

    return resInfo === null ? (
        <h1> Loading... </h1>
    ) :(
        <>
            <div className="menu">
                <h1> {resInfo.name} </h1>
                <h2> {resInfo.cuisines.join(", ")} </h2>
                <ul>
                    <li> Ratings: {resInfo.avgRating} </li>
                    <li> {resInfo.veg} && "VEG" </li>
                    <li> {resInfo.costForTwo} </li>
                    <li> Paneer Manchurian </li>
                    <li> Paneer Tikka Masala </li>
                    <li> Chilli Paneer </li>
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu;