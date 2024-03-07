import React from "react"

function NestedItemCategory(props) {
    const {name, categories} = props

    return (
        <>
            <div>
                <h3> {name.toUpperCase()} </h3>
                <p>
                    <ul>
                        {
                            categories.map((category, index) => {
                                return <li key={index}>
                                    <h4> {category.title} </h4>
                                    <ul>
                                        {
                                            category.itemCards.map((item, index) => {
                                                return <li key={index}> {item.card.info.name} </li>
                                            })
                                        }
                                    </ul> 
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