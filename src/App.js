import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header"
import NavItems from "./components/NavItems"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
    return <>
        <div className="app">
            <div className="header">
                <Header />
                <NavItems />
            </div>
            <Body />
        </div>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/cart",
        element: <Cart />
    }
])

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<RouterProvider router={appRouter}/>)