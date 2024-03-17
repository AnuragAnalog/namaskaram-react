import React from "react"
import { useSelector } from "react-redux"

import ItemCard from "./ItemCard";

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <>
            <div className="text-center m-4 p-4">
                <h1 className="text-4xl text-center font-extrabold"> Cart </h1>
                {
                    cartItems.map((itemInfo) => {
                        return (<>
                            <ItemCard {...itemInfo}/>
                        </>)
                    })
                }
            </div>
        </>
    )
}

export default Cart;