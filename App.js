import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header"
import NavItems from "./components/NavItems"
import Body from "./components/Body"

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

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<App />)