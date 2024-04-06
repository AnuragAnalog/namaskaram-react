import React, { useState } from "react"
import { Link } from "react-router-dom"

function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Email: ${email} Password: ${password}`)
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-3xl p-4 m-auto"> Log In </h1>
                <form className="flex flex-col gap-2 w-3/12 m-auto" onSubmit={handleSubmit}>
                    <input className="border border-black p-2 m-2" type="text" placeholder="Email" onChange={(e) => setEmail(email)}/>
                    <input className="border border-black p-2 m-2" type="password" placeholder="Password" onChange={(e) => setPassword(email)}/>
                    <button className="bg-blue-50 p-2 m-2 rounded-md border-2 border-solid border-black"> Submit </button>
                </form>
                <div className="flex flex-row gap-2 w-3/12 m-auto">
                    <p> Don't have an account? </p>
                    <Link to="/signup">
                        <button className="bg-blue-50 p-2 m-2 rounded-md border-2 border-solid border-black">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LogIn;