import { createUseStyles } from "react-jss";

export const navbarStyles = createUseStyles({
    outerWrapper: {
        position: "relative",
    },
    navbarWrapper: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "4rem",
        backgroundColor: (dark) => dark ? "rgba(20, 20, 20, 1)" : "white",
        color: (dark) => dark ? "white" : "rgba(51, 51, 51, 1)",
    },
    appLogo: {
        height: "1rem",
        fontFamily: "Pattaya",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        fontWeight: "500",
        margin: "0 1.5rem",
        cursor: "pointer",
        whiteSpace: "pre",

        "@media (max-width: 400px)": {
            margin: "0 0.5rem",
        },
    },
    searchContainer: {
        height: "2.75rem",
        width: "25rem",
        margin: "0 2rem",
        "@media (max-width: 1100px)": {
            display: "none",
        },
    },
    textField: {
        fontSize: '0.7rem',
        fontWeight: "800",
        cursor: "pointer",
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        
        "@media (max-width: 600px)": {
            display: "none",
        },
    },
    darkMode: {
        margin: "0 1.5rem",
        fontSize: '0.7rem',
        fontWeight: "800",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    search: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(60, 180, 110, 1)",
        color: "white",
        fontWeight: "600",
        fontSize: "0.8rem",
        padding: "0.7rem 1.5rem",
        borderRadius: "5px",
        cursor: "pointer",
        "@media (max-width: 1100px)": {
            display: "none",
        },
    },
    active: {
        backgroundColor: "gray",
        margin: "0 1.5rem",
        color: "white",
    },
    navPopup: {
        position: "absolute",
        top: "4rem",
        left: "0",
        width: "calc(100% - 2rem)",
        backgroundColor: (dark) => dark ? "rgba(51, 51, 51, 1)" : "white",
        margin: "0 1rem",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        height: "9rem",
        borderTop: (dark) => dark ? "0.5px solid white" : "0.5px solid rgba(51, 51, 51, 1)",
        boxShadow: (dark) => dark ? "0 0 5px 1px rgba(255, 255, 255, 0.5)" : "0 0 5px 1px rgba(51, 51, 51, 0.5)",
    },
    textItem: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        border: (dark) => dark ? "0.5px solid white" : "0.5px solid rgba(51, 51, 51, 1)",
        zIndex: "10000",
        height: "3rem",
        padding: "0 1rem",
        fontWeight: "600",
        color: (dark) => !dark ? "rgba(51, 51, 51, 1)" : "white",
        borderTop: "none !important",
        cursor: "pointer",
    },
    activeTab: {
        backgroundColor: (dark) => !dark ? "gray" : "white",
        color: (dark) => dark ? "rgba(51, 51, 51, 1)" : "white",
    },
    menu: {
        cursor: "pointer",
        display: "none",

        "@media (max-width: 600px)": {
            display: "block",
        },
    }
})