import React from "react"

function Contact() {
    return (
        <>
            <div>
                <h1 className="font-bold text-3xl p-4 m-auto"> Contact Us </h1>
                <form className="flex flex-col gap-2 w-3/12 m-auto">
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Name" />
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Email" />
                    <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Message" />
                    <button className="bg-blue-50 p-2 m-2 rounded-md border-2 border-solid border-black"> Submit </button>
                </form>
            </div>
        </>
    )
}

export default Contact;