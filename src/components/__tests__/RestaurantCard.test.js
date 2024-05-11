import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import ResData from "../mocks/RestaurantCardMocks.json"

it("Should render RestaurantCard component with data", () => {
    render(<RestaurantCard
        id={ResData.id}
        imgID={ResData.cloudinaryImageId}
        name={ResData.name}
        cusinies={ResData.cuisines}
        ratings={ResData.avgRating}
        costForTwo={ResData.costForTwo}
    />)

    const ResName = screen.getByText("Taste Of Shakes")

    expect(ResName).toBeInTheDocument()
})