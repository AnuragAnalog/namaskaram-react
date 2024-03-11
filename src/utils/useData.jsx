import { useState, useEffect } from "react"

import { DATA_URL } from "/src/utils/constants";

function useData() {
    const [restros, setRestros] = useState([])

    async function fetchData() {
        const data = await fetch(DATA_URL)
        const jsonData = await data.json()
        var tempData = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        tempData = tempData.map((restro) => {
            return restro.info
        })

        setRestros(tempData)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return restros;
}

export default useData;