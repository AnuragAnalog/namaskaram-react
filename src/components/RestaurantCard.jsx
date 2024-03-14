import React from "react"

function RestaurantCard(props) {
    const { id, name, cusinies, ratings, imgID, costForTwo } = props

    const trunc_names = name.length < 20 ? name : name.slice(0, 20)+"..."
    const trunc_cusinies = cusinies.join(", ").length < 30 ? cusinies.join(", ") : cusinies.join(", ").slice(0, 30)+"..."

    return <>
        <div key={id} className="flex flex-col hover:cursor-pointer w-[250px] h-[300px] gap-5 border-2 border-solid border-black bg-white">
            <img className="w-[95%] h-[75%] self-center m-2 rounded-[10%]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgID}`} alt="name"/>
            <div className="restro-info">
                {/* <h3 className="restro-card-name-untruncted"> {name} </h3> */}
                <h3 className="m-0 text-xl font-bold font-sans"> {trunc_names} </h3>
                <h5 className="m-0"> {trunc_cusinies} </h5>
                <h5 className="m-0"> Rating: {ratings} </h5>
                <h5 className="m-0"> {costForTwo} </h5>
            </div>
        </div>
    </>
}

export default RestaurantCard;