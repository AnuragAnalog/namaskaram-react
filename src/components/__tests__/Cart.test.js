import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { fireEvent, render, screen } from "@testing-library/react"

import appStore from "/src/utils/appStore"
import Header from "/src/components/Header"
import Cart from "/src/components/Cart"
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
            <RestaurantMenu />
        </Provider>, { wrapper: MemoryRouter })
    })

    const accordianHeader = screen.getByText("POT RICE (3)")
    fireEvent.click(accordianHeader)

    const items = screen.getAllByTestId("food-item")
    expect(items.length).toBe(3)
})

it("Should add items to the cart", async () => {
    await act(async () => {
        render(<Provider store={appStore}>
            <Header />
            <Cart />
            <RestaurantMenu />
        </Provider>, { wrapper: MemoryRouter })
    })

    const accordianHeader = screen.getByText("POT RICE (3)")
    fireEvent.click(accordianHeader)

    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[0])

    const cartText = screen.getByText("1Items")
    expect(cartText).toBeInTheDocument()

    fireEvent.click(addBtns[1])
    fireEvent.click(addBtns[2])

    const cartText2 = screen.getByText("3Items")
    expect(cartText2).toBeInTheDocument()

    const clearBtn = screen.getByTestId("clear-cart")
    fireEvent.click(clearBtn)

    expect(clearBtn).toBeInTheDocument()
})