import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../Header"

it("Should load the login button", () => {
    render(<Header />)

    const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument()
})