import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "/src/firebase"

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [isSignedUp, setIsSignedUp] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        if (password !== confirmPassword) {
            setError("passwords do not match")
            return
        }

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            setIsSignedUp(true)
        }).catch((error) => {
            const errorCode = error.code
            setError(errorCode.split("/")[1].split("-").join(" "))
        })
    }

    if (isSignedUp) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <div className="flex flex-col gap-8 py-10 border-2 border-solid border-black m-auto rounded-xl w-6/12">
                <h1 className="font-bold text-3xl p-4 m-auto"> Sign Up </h1>

                <form className="flex flex-col gap-2 w-8/12 m-auto" onSubmit={handleSubmit}>
                    <p className="text-red-500 capitalize m-auto"> {error} </p>

                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="border border-black p-2 m-2 rounded-lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input className="border border-black p-2 m-2 rounded-lg" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <button className="bg-blue-50 p-2 m-2 rounded-md border-2 border-solid border-black">
                        Submit
                    </button>
                </form>

                <div className="flex flex-row w-8/12 m-auto">
                    <p className="m-auto"> Already have an account? </p>

                    <Link className="m-auto" to="/login">
                        <button className="bg-blue-50 p-2 rounded-md border-2 border-solid border-black">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SignUp;