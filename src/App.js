import React, { useState, useEffect, lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Header from "/src/components/Header"
import Footer from "/src/components/Footer"
import Body from "/src/components/Body"
import About from "/src/components/About"
import Contact from "/src/components/Contact"
import Cart from "/src/components/Cart"
import Error from "/src/components/Error"
import LogIn from "/src/components/LogIn"
import RestaurantMenu from "/src/components/RestaurantMenu"
import UserContext from "/src/utils/UserContext"
import appStore from "./utils/appStore"

const Grocery = lazy(() => import("/src/components/Grocery"))

function App() {
    const [userName, setUserName] = useState("")

    useEffect(() => {
        // Make an API call to get the user name/authentication
        setUserName("Anurag Peddi")
    }, [])

    return <>
        <div className="flex flex-col gap-2">
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
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
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1> Please wait, while your page is being loaded....</h1>}>
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<RouterProvider router={appRouter}/>)