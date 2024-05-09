import React from "react"
import { Link } from "react-router-dom"

// The user have successfully logged in, show a welcome message with some emoji's and a button to navigate to the home page
function Welcome() {
    return (
        <>
            <div className="flex flex-col gap-10 py-20">
                <h1 className="font-bold text-3xl p-4 m-auto">
                    Welcome!
                </h1>
                <div className="flex flex-col gap-5 w-4/12 m-auto">
                    <p className="text-2xl m-auto">
                        You have successfully logged in!
                    </p>
                    <Link className="m-auto" to="/">
                        <button className="bg-blue-50 p-2 rounded-md border-2 border-solid border-black">
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome;