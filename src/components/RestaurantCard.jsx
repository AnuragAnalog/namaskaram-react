import React from "react"

function RestaurantCard(props) {
    const { id, name, cusinies, ratings, imgID, costForTwo } = props

    const trunc_names = name.length < 20 ? name : name.slice(0, 20)+"..."
    const trunc_cusinies = cusinies.join(", ").length < 30 ? cusinies.join(", ") : cusinies.join(", ").slice(0, 30)+"..."

    return <>
        <div key={id} className="restro-card">
            <img className="restro-card-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgID}`} alt="name"/>
            <div className="restro-info">
                {/* <h3 className="restro-card-name-untruncted"> {name} </h3> */}
                <h3 className="restro-card-name"> {trunc_names} </h3>
                <h5 className="restro-card-cusinies"> {trunc_cusinies} </h5>
                <h5 className="restro-card-ratings"> Rating: {ratings} </h5>
                <h5 className="restro-card-text"> {costForTwo} </h5>
            </div>
        </div>
    </>
}

export default RestaurantCard;