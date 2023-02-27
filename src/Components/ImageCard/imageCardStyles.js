import { createUseStyles } from "react-jss";

export const imageCardStyles = createUseStyles({
    card: {
        margin: "1rem",
        borderRadius: "8px",
        borderCollapse: "separate",
        perspective: "1px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",

        "@media (max-width: 1000px)": {
            height: "50rem",
        },
        "@media (max-width: 500px)": {
            height: "30rem",
        },
     },
    imageTag: {
        width: "100%",
        height: "calc(100% - 5.5rem)",
        objectFit: "cover",
    },
    details: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5rem",
        borderRadius: "0 0 8px 8px",
        padding: "1rem",
        border: (dark) => dark ? "none" : "1px solid #E5E5E5",
        backgroundColor: (dark) => dark ? "rgba(20, 20, 20, 1)" : "white"
    },
    data: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "left",
    },
    userIcon: {
        height: "3rem",
        with: "3rem",
    },
    useImg: {
        height: "100%",
        width: "100%",
        borderRadius: "50%",
    },
    userNameSection: {
        marginLeft: "0.5rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "left",
        flexDirection: "column",
    },
    userName: {
        textAlign: "left",
        fontSize: "0.95rem",
        fontWeight: "700"
    },
    userHandle: {
        textAlign: "left",
        color: "#A7A7A7",
        fontWeight: "600",
        fontSize: "0.8rem"
    },
    likeCount: {
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    like: {
        "& path": {
            height: "2rem",
        }
    }
})