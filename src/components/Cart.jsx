import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { clearCart } from "/src/utils/cartSlice"
import ItemCard from "./ItemCard";

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatcher = useDispatch()

    function clearCartItems() {
        dispatcher(clearCart())
    }

    return (
        <>
            <div className="text-center p-4 w-6/12 m-auto">
                <h1 className="text-4xl text-center font-extrabold"> Cart </h1>
                <button className="bg-gray-50 p-2 rounded-lg shadow-lg" onClick={clearCartItems}> Clear Cart </button>
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