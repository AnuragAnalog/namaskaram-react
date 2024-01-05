import React from "react"

function RestaurantCard(props) {
    const { name, cusinies, ratings } = props

    return <>
        <div className="restro-card">
            <img className="restro-card-img" src="https://meghanafoods.co.in/assets/img/logo.png" alt="name"/>
            <h3> {name} </h3>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/498/656/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-illustration-vector.jpg" alt="star" />
            <h5> {cusinies.join(", ")} </h5>
            <h5> Rating: {ratings} </h5>
        </div>
    </>
}

export default RestaurantCard;