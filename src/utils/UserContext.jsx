import { createContext } from "react";

const UserContext = createContext({
    loggedIn: false,
    loggedInUser: "",
})

export default UserContext;