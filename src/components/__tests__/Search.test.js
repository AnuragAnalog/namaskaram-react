import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { render, screen, fireEvent } from "@testing-library/react"

import ALL_DATA from "/src/components/mocks/BodyCardMocks.json"
import Body from "/src/components/Body"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(ALL_DATA)
        }
    })
})

it("Should Render the Body Component", async () => {
    await act(async () => {
        render(<Body />, { wrapper: MemoryRouter })
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    const searchBtn = screen.getByTestId("search-btn")
    const searchInput = screen.getByPlaceholderText("Search here for food, beverages, etc.")
    fireEvent.change(searchInput, { target: { value: "Dosa" } })
    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(9)
    expect(cardsAfterSearch.length).toBe(1)
})