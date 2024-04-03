import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"

it("Should render RestaurantCard component with data", () => {
    render(<RestaurantCard />)
})