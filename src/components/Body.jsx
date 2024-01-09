import React from "react"

import data from "../data"
import RestaurantCard from "./RestaurantCard";

function Body() {
    const restaurants = data?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data)
    const restroCards = restaurants.map((restaurant) => {
        return <RestaurantCard
            imgID={restaurant.cloudinaryImageId}
            name={restaurant.name}
            cusinies={restaurant.cuisines}
            ratings={restaurant.avgRating}
            address={restaurant.address}
            costForTwo={restaurant.costForTwo}
        />
    })

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
            <div className="restro-container">
                {restroCards}
            </div>
        </div>
    </>
}

export default Body;