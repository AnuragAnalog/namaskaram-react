import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Body from "/src/components/Body"

global.fetch = jest.fn()

it("Should Render the Body Component", () => {
    render(<Body />)
})