import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "/src/utils/appStore"
import { BrowserRouter } from "react-router-dom"

it("Should load the login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Text is not a good way to find the element, role is a better way
    const loginButton = screen.getByRole("button", { name: "LogIn"})

    expect(loginButton).toBeInTheDocument()
})

it("Should change from Login Button to Logout Button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Text is not a good way to find the element, role is a better way
    const loginButton = screen.getByRole("button", { name: "LogIn"})

    // To simulate the click of the login button
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name: "LogOut"})

    expect(logoutButton).toBeInTheDocument()
})