import React from "react"

function ItemCard(props) {
    const { id, item } = props
    console.log(props)
    const { info } = item.card
    console.log(info.imageId)

    return (
        <>
            <div className="item-card">
                <div className="item-card-left">
                    <img src="../assets/veg-symbol.png" alt="veg" />
                    <h3> {info.name} </h3>
                    <p> Rs.{info.price / 100 || info.defaultPrice / 100} </p>
                    <br />
                    <p> {info.description} </p>
                </div>
                <div className="item-card-right">
                    <img className="item-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+info.imageId} alt={info.imageId} />
                </div>
                <hr />
            </div>
        </>
    )
}

export default ItemCard;