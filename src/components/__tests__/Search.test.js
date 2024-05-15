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

it("Should Search the ResList for the Dosa text Input", async () => {
    await act(async () => {
        render(<Body />, { wrapper: MemoryRouter })
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByTestId("search-btn")
    const searchInput = screen.getByPlaceholderText("Search here for food, beverages, etc.")
    fireEvent.change(searchInput, { target: { value: "Dosa" } })
    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(1)
})

describe("Should Search the ResList for various text Inputs", () => {
    beforeAll(async () => {
        await act(async () => {
            render(<Body />, { wrapper: MemoryRouter })
        })

        global.screen = screen
        global.searchCrossBtn = screen.getByTestId("search-cross-btn")
        global.cardsBeforeSearch = screen.getAllByTestId("resCard")
    })

    afterEach(async () => {
        fireEvent.click(searchCrossBtn)
        expect(cardsBeforeSearch.length).toBe(9)
    })

    it("Should Search the ResList for the Dosa text Input", () => {
        const searchBtn = screen.getByTestId("search-btn")
        const searchInput = screen.getByPlaceholderText("Search here for food, beverages, etc.")
        fireEvent.change(searchInput, { target: { value: "Dosa" } })
        fireEvent.click(searchBtn)
    
        const cardsAfterSearch = screen.getAllByTestId("resCard")
    
        expect(cardsAfterSearch.length).toBe(1)
    })

    // it("Should Search the ResList for the Chai Point text Input", () => {
    //     const searchBtn = screen.getByTestId("search-btn")
    //     const searchInput = screen.getByPlaceholderText("Search here for food, beverages, etc.")
    //     fireEvent.change(searchInput, { target: { value: "Chai Point" } })
    //     fireEvent.click(searchBtn)
    
    //     const cardsAfterSearch = screen.getAllByTestId("resCard")
    
    //     expect(cardsAfterSearch.length).toBe(3)
    // })

    // it("Should Search the ResList for the Coffee text Input", () => {
    //     const searchBtn = screen.getByTestId("search-btn")
    //     const searchInput = screen.getByPlaceholderText("Search here for food, beverages, etc.")
    //     fireEvent.change(searchInput, { target: { value: "Coffee" } })
    //     fireEvent.click(searchBtn)
    
    //     const cardsAfterSearch = screen.getAllByTestId("resCard")
    
    //     expect(cardsAfterSearch.length).toBe(2)
    // })
})