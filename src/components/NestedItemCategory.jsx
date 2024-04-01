import React, { useState } from "react"

import ItemCategory from "/src/components/ItemCategory"

function NestedItemCategory(props) {
    const {name, categories, onlyVeg} = props
    const [showIndex, setShowIndex] = useState(null)

    function checkSameIndex(index) {
        if (showIndex === index) {
            setShowIndex(null)
        } else {
            setShowIndex(index)
        }
    }

    return (
        <>
            <div>
                <h3> {name.toUpperCase()} </h3>
                <p>
                    <ul>
                        {
                            categories.map((category, index) => {
                                return <li key={index}>
                                    <ItemCategory
                                                name={category.title}
                                                items={category.itemCards}
                                                onlyVeg={onlyVeg}
                                                showItems={index === showIndex ? true : false}
                                                changeShowIndex={() => checkSameIndex(index)}
                                                />
                                    {/* <h4> {category.title} </h4>
                                    <ul>
                                        {
                                            category.itemCards.map((item, index) => {
                                                return <ItemCard key={index} item={item.card.info} />
                                            })
                                        }
                                    </ul>  */}
                                </li>
                            })
                        }
                    </ul>
                </p>
            </div>
        </>
    )
}

export default NestedItemCategory;