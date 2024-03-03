import React from "react"
import { useState, useEffect } from "react";

// import data from "../data"
import { DATA_URL } from "/src/utils/constants";
import RestaurantCard from "./RestaurantCard";

function Body() {
    // const restaurants = data?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data)
    // const [restros, setRestros] = useState(restaurants)
    const [restroCards, setRestroCards] = useState([])
    const [restros, setRestros] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setRestroCards(filteredRestro.map((restro) => {
            return <RestaurantCard
                id={restro.id}
                imgID={restro.cloudinaryImageId}
                name={restro.name}
                cusinies={restro.cuisines}
                ratings={restro.avgRating}
                costForTwo={restro.costForTwo}
            />  
        }))
    }, [filteredRestro])

    async function fetchData() {
        const data = await fetch(DATA_URL)
        const jsonData = await data.json()
        var tempData = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        tempData = tempData.map((restro) => {
            return restro.info
        })

        setRestros(tempData)
        setFilteredRestro(tempData)
    }

    function onClickHandle() {
        const filtered_restaurant = restros.filter((restro) => {
            return restro.avgRating > 4
        })

        setFilteredRestro(filtered_restaurant)
    }

    function onSearchHandle(event) {
        setSearchText(event.target.value)
    }

    function onSearchTextHandle() {
        const filteredRestaurant = restros.filter((restro) => {
            return restro.name.toLowerCase().includes(searchText.toLowerCase())
        })

        setFilteredRestro(filteredRestaurant)
    }

    return <>
        <div className="body">
            <div className="search">
                <input className="search-bar" value={searchText} onChange={onSearchHandle}>
                </input>
                <button className="search-btn" onClick={onSearchTextHandle}>
                    Search
                </button>
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