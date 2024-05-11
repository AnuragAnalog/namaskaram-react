import React, { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "/src/firebase"
import UserContext from "/src/utils/UserContext"

function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { setUserName, isLoggedIn, setLoggedIn } = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => { 
            const userInfo = userCredential.user
            console.log(userInfo)
            setLoggedIn(true)
            setUserName(userInfo.email)
        }).catch((error) => {
            const errorCode = error.code
            setError(errorCode.split("/")[1].split("-").join(" "))
        })
    }

    if (isLoggedIn) {
        return <Navigate to="/welcome" />
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-4xl p-4 m-auto"> Log In </h1>
                <form className="flex flex-col gap-2 w-3/12 m-auto" onSubmit={handleSubmit}>
                    <p className="text-red-500 capitalize m-auto"> {error} </p>
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="border border-black p-2 m-2 rounded-lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="bg-blue-50 p-2 m-2 rounded-lg border-2 border-solid border-black"> Submit </button>
                </form>
                <div className="flex flex-row w-3/12 m-auto">
                    <p className="m-auto"> Don't have an account? </p>
                    <Link className="m-auto" to="/signup">
                        <button className="bg-blue-50 p-2 rounded-md border-2 border-solid border-black">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LogIn;