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
            <div className="flex flex-col bg-slate-200 m-auto w-full p-2 rounded-xl">
                <h3 className="m-auto text-xl font-bold"> {name.toUpperCase()}{` (${categories.length})`} </h3>
                <div>
                    <div className="flex flex-col gap-2">
                        {
                            categories.map((category, index) => {
                                return <div key={index}>
                                    <ItemCategory
                                                name={category.title}
                                                items={category.itemCards}
                                                onlyVeg={onlyVeg}
                                                showItems={index === showIndex ? true : false}
                                                changeShowIndex={() => checkSameIndex(index)}
                                                />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NestedItemCategory;