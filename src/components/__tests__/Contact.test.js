import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

test("Should load Contact us component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

it("Should load button in Contact component", () => {
    render(<Contact />)

    // Method to retrive button element
    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
})

describe("Testing the Input buttons", () => {
    test("Should load input field in Contact component", () => {
        render(<Contact />)
    
        const inputName = screen.getByPlaceholderText("Name")
    
        expect(inputName).toBeInTheDocument()
    })
    
    test("Should load all the input fields in Contact Component", () => {
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox")
        // It returns an array of all the input fields, which are nothing but DOM elements
    
        // Method to check the length of the array
        expect(inputBoxes).toHaveLength(3)
        // expect(inputBoxes.length).toBe(3)
    })
})