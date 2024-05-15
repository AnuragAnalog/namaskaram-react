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

it("Should filter the top rated restaurants", async () => {
    await act(async () => {
        render(<Body />, { wrapper: MemoryRouter })
    })

    const cardsBeforeClick = screen.getAllByTestId("resCard")
    expect(cardsBeforeClick.length).toBe(9)

    const topRatedBtn = screen.getByTestId("top-rated")
    fireEvent.click(topRatedBtn)

    const cardsAfterClick = screen.getAllByTestId("resCard")

    expect(cardsAfterClick.length).toBe(4)
})