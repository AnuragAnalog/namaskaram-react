import React from "react"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { WithPromotedLabel } from "/src/components/RestaurantCard";
import Offline from "/src/components/Offline";
// import useData from "/src/utils/useData";
import { DATA_URL } from "/src/utils/constants";
import useCheckInternet from "/src/utils/useCheckInternet";
import UserContext from "/src/utils/UserContext";

// Image Imports
import cross from "/src/assets/close.png"
import search from "/src/assets/magnifying-glass.png"

// Shimmer Imports
import { ShimmerBody } from "/src/components/Shimmer"

function Body() {
    const [restroCards, setRestroCards] = useState([])
    const [restros, setRestros] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")
    const [activeTopRated, setActiveTopRated] = useState(false)
    const [clickSearch, setClickSearch] = useState(false)
    const { loggedInUser, setUserName, isLoggedIn } = useContext(UserContext)

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)

    // const resInfo = useData()
    useEffect(() => {
        fetchData()
    }, [])

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

    async function fetchData() {
        const data = await fetch(DATA_URL)
        const jsonData = await data.json()
        // console.log(jsonData)
        var tempData = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        tempData = tempData.map((restro) => {
            return restro.info
        })

        setRestros(tempData)
        setFilteredRestro(tempData)
    }

    function resetTopRated() {
        setActiveTopRated(false)
        setFilteredRestro(restros)
    }

    function onClickHandle() {
        const filtered_restaurant = filteredRestro.filter((restro) => {
            return restro.avgRating > 4
        })

        setActiveTopRated(true)
        setFilteredRestro(filtered_restaurant)
    }

    function onSearchHandle(event) {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        if (clickSearch) {
            const filteredRestaurant = filteredRestro.filter((restro) => {
                return restro.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredRestro(filteredRestaurant)
            setClickSearch(false)
            console.log("Filtered Restaurant")
        }
    }, [clickSearch])

    const internetStatus = useCheckInternet()
    if (internetStatus === false) {
        return <Offline />
    }

    return restroCards.length == 0 ? <ShimmerBody /> : <>
        <div className="body">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row justify-between m-3 p-2 w-96 h-12 bg-red-50 items-center rounded-l-full rounded-r-full border shadow-xl border-solid border-black" onClick={() => {setFilteredRestro(restros)}}>
                        <div className="w-6 h-6" onClick={() => setClickSearch(true)}>
                            <img src={search} alt="Search Image"/>
                        </div>
                        <div className="w-10/12 text-gray-400">
                            <input className="w-full bg-transparent" value={searchText} placeholder="Search here for food, beverages, etc." onChange={onSearchHandle} />
                        </div>
                        <div className="w-3 h-3" onClick={() => {setSearchText("")}}>
                            <img src={cross} alt="Cross Image"/>
                        </div>
                    </div>
                    {/* <input className="m-2 w-96 h-8 rounded-l-full rounded-r-full border shadow-lg border-solid border-black" value={searchText} onChange={onSearchHandle} /> */}
                    {/* <button className="m-3 w-40 h-8 bg-blue-50 rounded-md border border-solid border-black" onClick={onSearchTextHandle}> */}
                        {/* Search */}
                    {/* </button> */}
                </div>
                <div className={"flex flex-row w-32 h-12 bg-red-50 text-center rounded-l-full rounded-r-full border shadow-xl border-solid border-black"}>
                    <span className="m-auto" onClick={onClickHandle}> Top Rated </span>
                    {activeTopRated &&
                        <div className="m-auto w-3 h-3" onClick={resetTopRated}>
                            <img src={cross} alt="Cross Image"/>
                        </div>}
                </div>
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