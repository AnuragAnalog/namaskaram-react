import React from "react"

import RestaurantCard from "./RestaurantCard";

function Body() {
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
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    </>
}

export default Body;