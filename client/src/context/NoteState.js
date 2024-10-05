import React, { useEffect, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const [token, setToken] = useState(localStorage.getItem("userDataToken"));
    const [user, setUser] = useState("");

    // Function to save server token in localStorage
    const serverTokenLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("userDataToken", serverToken);
    };

    //check wheather token is there or not.
    const isLoggedIn = !!token;
    // console.log(isLoggedIn);

    // Function to remove token and navigate to home page
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("userDataToken");
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch(`${api_url}/api/auth/getUser`, {
                method: "GET",
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                }
            });
    
            if (response.ok) {
                const data = await response.json();
                // console.log("user data: ", data.msg);
                setUser(data.msg); // Set the user state with the received data
            } else {
                const errorData = await response.json();
                console.log("Failed to authenticate user:", errorData.msg);
            }
        } catch (error) {
            console.log("Invalid user:", error);
        }
    };
    

    useEffect(()=>{
        userAuthentication();
        // eslint-disable-next-line 
    },[]);

    return (
        <NoteContext.Provider value={{user, serverTokenLS, LogoutUser, isLoggedIn, userAuthentication }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
