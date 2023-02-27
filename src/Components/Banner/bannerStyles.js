import { createUseStyles } from "react-jss";

export const bannerStyles = createUseStyles({
    bannerWrapper: {
        height: "20rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundSize: "cover",
    },
    heading: {
        fontSize: "1.8rem",
        fontWeight: "600",
        margin: "0.5rem",
        color: "white",
    },
    pTag: {
        color: "white",
        fontSize: "0.7rem",
        margin: "0.5rem",
    },
    searchContainer: {
        margin: "0.5rem",
        width: "50rem",
        height: "3rem",
        display: "flex",

        "@media (max-width: 1000px)": {
            width: "30rem",
            height: "2.5rem",
        },
        "@media (max-width: 500px)": {
            width: "20rem",
            height: "2rem",
        },
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
        marginLeft: "1rem",
    },
    tagContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "left",
        maxWidth: "100%",
        flexWrap: "wrap",
        backgroundColor: (dark) => dark ? "rgba(35, 35, 35, 1)" : "white",
        color: (dark) => !dark ? "rgba(35, 35, 35, 1)" : "white",
    },
    relatedTags: {
        fontSize: "1.2rem",
        fontWeight: "600",
        width: "100%",
        textAlign: "left",
        margin: "0.5rem 1.5rem"
    }
})