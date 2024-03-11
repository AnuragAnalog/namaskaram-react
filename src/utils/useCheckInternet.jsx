import { useState, useEffect } from "react"

function useCheckInternet() {
    const [internetStatus, setInternetStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setInternetStatus(false);
        })

        window.addEventListener("online", () => {
            setInternetStatus(true);
        })
    }, [])

    return internetStatus;
}

export default useCheckInternet;