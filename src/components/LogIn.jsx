import React, { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "/src/firebase"

function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    console.log(email, password)
    function handleSubmit(event) {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => { 
            const userInfo = userCredential.user
            console.log(userInfo)
        }).catch((error) => {
            const errorMessage = error.message
            setError(errorMessage)
            console.log(errorMessage)
        })
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-3xl p-4 m-auto"> Log In </h1>
                <form className="flex flex-col gap-2 w-3/12 m-auto" onSubmit={handleSubmit}>
                    <input className="border border-black p-2 m-2" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="border border-black p-2 m-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
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