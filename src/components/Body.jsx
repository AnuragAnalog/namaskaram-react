import React from "react"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { WithPromotedLabel } from "/src/components/RestaurantCard";
import Offline from "/src/components/Offline";
import useData from "/src/utils/useData";
import useCheckInternet from "/src/utils/useCheckInternet";
import UserContext from "/src/utils/UserContext";
import cross from "/src/assets/close.png"
import search from "/src/assets/magnifying-glass.png"

function Body() {
    const [restroCards, setRestroCards] = useState([])
    const [restros, setRestros] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")
    const { loggedInUser, setUserName } = useContext(UserContext)

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)

    const resInfo = useData()
    useEffect(() => {
        setRestros(resInfo)
        setFilteredRestro(resInfo)
    })

    useEffect(() => {
        setRestroCards(filteredRestro.map((restro) => {
            return <Link to={"/restaurants/"+restro.id} className="link-element">
                {
                    restro.promoted ? <RestaurantCardPromoted
                        id={restro.id}
                        imgID={restro.cloudinaryImageId}
                        name={restro.name}
                        cusinies={restro.cuisines}
                        ratings={restro.avgRating}
                        costForTwo={restro.costForTwo}
                    /> : <RestaurantCard
                        id={restro.id}
                        imgID={restro.cloudinaryImageId}
                        name={restro.name}
                        cusinies={restro.cuisines}
                        ratings={restro.avgRating}
                        costForTwo={restro.costForTwo}
                    />
                }
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
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row gap-2 m-3 w-72 h-8 bg-red-50 items-center rounded-l-full rounded-r-full border shadow-lg border-solid border-black" onClick={() => {setFilteredRestro(restros)}}>
                    <div className="w-4 h-4">
                        <img src={search} alt="Cross Image"/>
                    </div>
                    <div className="w-9/12">

                    </div>
                    <div className="w-4 h-4">
                        <img src={cross} alt="Cross Image"/>
                    </div>
                </div>
                {/* <input className="m-2 w-96 h-8 rounded-l-full rounded-r-full border shadow-lg border-solid border-black" value={searchText} onChange={onSearchHandle} /> */}
                {/* <button className="m-3 w-40 h-8 bg-blue-50 rounded-md border border-solid border-black" onClick={onSearchTextHandle}> */}
                    {/* Search */}
                {/* </button> */}
            </div>
            <div className="m-3 w-40 h-8 bg-yellow-50 text-center rounded-md border-2 border-solid border-black" onClick={onClickHandle}>
                Top Rated
            </div>
            <div className="">
                <label className="m-2"> Logged In User: </label>
                <input className="m-2 w-96 h-8 rounded-md border-2 border-solid border-black" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
            <div className="flex flex-wrap w-3/4 justify-center items-center m-auto gap-6">
                {restroCards}
            </div>
        </div>
    </>
}

export default Body;