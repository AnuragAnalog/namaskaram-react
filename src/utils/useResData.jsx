import { useState, useEffect } from "react"

import { MENU_URL } from "./constants";

function useData(resId) {
    const [resInfo, setResInfo] = useState(null)
    const [itemInfo, setItemInfo] = useState(null)

    async function fetchData() {
        const data = await fetch(MENU_URL+resId)
        const jsonData = await data.json()
        setItemInfo(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        setResInfo(jsonData.data.cards[2].card.card.info)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return [resInfo, itemInfo];
}

export default useData;