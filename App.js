import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header"
import NavItems from "./components/NavItems"

function App() {
    return <>
        <div className="app">
            <Header />
            <NavItems />
        </div>
    </>
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<App />)