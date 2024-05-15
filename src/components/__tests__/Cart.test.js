import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { fireEvent, render, screen } from "@testing-library/react"

import appStore from "/src/utils/appStore"
import Header from "/src/components/Header"
import RestaurantMenu from "/src/components/RestaurantMenu"
import RES_MENU_DATA from "/src/components/mocks/RestaurantMenuMocks.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RES_MENU_DATA)
        }
    })
})

it("Should render the RestaurantMenu component", async () => {
    await act(async () => {
        render(<Provider store={appStore}>
            <Header />
            <RestaurantMenu />
        </Provider>, { wrapper: MemoryRouter })
    })

    const accordianHeader = screen.getByText("POT RICE (3)")
    fireEvent.click(accordianHeader)

    const items = screen.getAllByTestId("food-item")
    expect(items.length).toBe(3)

    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[0])

    const cartText = screen.getByText("1Items")
    expect(cartText).toBeInTheDocument()
})