import React from "react"

function Footer() {
    return (
        <>
            {/* <div className="flex flex-col"> */}
                <div className="flex flex-col w-full h-72 bg-gray-600 gap-24 items-center justify-center">
                    <div className="flex flex-row h-20 w-[75%] gap-14 items-center justify-center">
                        <div className="flex flex-col gap-1 text-white">
                            <h1 className="text-2xl"> Get to know us </h1>
                            <p className="text-sm"> About Anurag's food </p>
                            <p className="text-sm"> Our App </p>
                            <p className="text-sm"> Our Blog </p>
                            <p className="text-sm"> Meet the team </p>
                        </div>

                        <div className="flex flex-col gap-1 text-white">
                            <h1 className="text-2xl"> Connect with us </h1>
                            <p className="text-sm"> Facebook </p>
                            <p className="text-sm"> Twitter/X </p>
                            <p className="text-sm"> Instagram </p>
                            <p className="text-sm"> YouTube </p>
                        </div>

                        <div className="flex flex-col gap-1 text-white">
                            <h1 className="text-2xl"> Make money with us </h1>
                            <p className="text-sm"> Sell on Anurag's food </p>
                            <p className="text-sm"> Sell under Anurag's food </p>
                            <p className="text-sm"> Become an Affiliate </p>
                            <p className="text-sm"> Fulfillment by Anurag's food </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[75%]">
                        <div className="bg-white w-full h-[2px]"></div>
                        <p className="text-white text-left"> @ 2024 Anurag's food All Rights Reserved </p>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Footer;