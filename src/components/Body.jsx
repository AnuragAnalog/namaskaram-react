import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Offline from "./Offline";
import useData from "/src/utils/useData";
import useCheckInternet from "/src/utils/useCheckInternet";

function Body() {
    const [restroCards, setRestroCards] = useState([])
    const [restros, setRestros] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")

    const resInfo = useData()
    useEffect(() => {
        setRestros(resInfo)
        setFilteredRestro(resInfo)
    })

    useEffect(() => {
        setRestroCards(filteredRestro.map((restro) => {
            return <Link to={"/restaurants/"+restro.id} className="link-element">
                <RestaurantCard
                    id={restro.id}
                    imgID={restro.cloudinaryImageId}
                    name={restro.name}
                    cusinies={restro.cuisines}
                    ratings={restro.avgRating}
                    costForTwo={restro.costForTwo}
                />
            </Link>
        }))
    }, [filteredRestro])

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

    const internetStatus = useCheckInternet()
    if (internetStatus === false) {
        return <Offline />
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