import React from "react"
import { useState, useEffect } from "react";

import data from "../data"
import RestaurantCard from "./RestaurantCard";

function Body() {
    const restaurants = data?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data)
    const [restroCards, setRestroCards] = useState([])
    const [restros, setRestros] = useState(restaurants)

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setRestroCards(restros.map((restro) => {
            return <RestaurantCard
                imgID={restro.cloudinaryImageId}
                name={restro.name}
                cusinies={restro.cuisines}
                ratings={restro.avgRating}
                address={restro.address}
                costForTwo={restro.costForTwo}
            />  
        }))
    }, [restros])

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=")
        const jsonData = await data.json()
        // setRestros(jsonData)
        // console.log(jsonData)
    }

    function onClickHandle() {
        const filtered_restaurant = restaurants.filter((restaurant) => {
            return restaurant.avgRating > 4
        })
        console.log(restros)

        setRestros(filtered_restaurant)
    }

    return <>
        <div className="body">
            <div className="search">
                <div className="search-bar">
                    This is a fucking search bar
                </div>
                <div className="search-btn">
                    Search
                </div>
            </div>
            <div className="top-rated-btn" onClick={onClickHandle}>
                Top Rated
            </div>
            <div className="restro-container">
                {restroCards}
            </div>
        </div>
    </>
}

export default Body;