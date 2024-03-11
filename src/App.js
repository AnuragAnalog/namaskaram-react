import React, { lazy } from "react"
import ReactDOM from "react-dom/client"

import Header from "/src/components/Header"
import NavItems from "/src/components/NavItems"
import Body from "/src/components/Body"
import About from "/src/components/About"
import Contact from "/src/components/Contact"
import Cart from "/src/components/Cart"
import Error from "/src/components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "/src/components/Grocery"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const Grocery = lazy(() => import("/src/components/Grocery"))

function App() {
    return <>
        <div className="app">
            <div className="header">
                <Header />
                <NavItems />
            </div>
            <Outlet />
        </div>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
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
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Grocery />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<RouterProvider router={appRouter}/>)