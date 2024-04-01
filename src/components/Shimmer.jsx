import React from "react"
import { ShimmerSimpleGallery } from "react-shimmer-effects"

export function ShimmerBody() {
    return (
        <>
            <div>
                <div className="flex flex-col w-9/12 m-auto items-center justify-center">
                    <ShimmerSimpleGallery card imageHeight={300} caption />
                </div>
            </div>
        </>
    )
}

