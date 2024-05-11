import React from "react"
import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();

    return (
        <>
            <div className="m-auto w-6/12">
                <h1 className="text-4xl font-extrabold m-auto"> Oops!!! </h1>
                <h2 className="text-xl font-semibold"> Something went wrong </h2>
                <h3 className="text-red-600 m-auto"> {err.status}: {err.statusText} </h3>
            </div>
        </>
    )
}

export default Error;