import React from "react"
import { ShimmerSimpleGallery, ShimmerText, ShimmerContentBlock, ShimmerThumbnail } from "react-shimmer-effects"

export function ShimmerBody() {
    return (
        <>
            <div>
                <div className="flex flex-col w-9/12 m-auto items-center justify-center">
                    <ShimmerSimpleGallery imageType="circular" imageHeight={300} caption />
                </div>
            </div>
        </>
    )
}

export function ShimmerResCard() {
    return (
        <>
            <div className="w-9/12 m-auto">
                <ShimmerThumbnail height={250} rounded />
                <ShimmerText line={2} gap={10} />
                <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
            </div>
        </>
    )
}
