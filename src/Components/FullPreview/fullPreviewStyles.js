import { createUseStyles } from "react-jss";

export const fullPreviewStyles = createUseStyles({
    backdrop: {
        position: 'absolute',
        top: "0",
        bottom: "0",
        backgroundColor: "rgba(150, 150, 150, 0.8)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: (dark) => dark ? "white" : "rgba(20, 20, 20, 1)"
    },
    cross: {
        backgroundColor: "white",
        borderRadius: "50%",
        minHeight: "2rem",
        minWidth: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        position: "absolute",
        right: "0",
        top: "0",
        transform: "translate(50%, -50%)",
        cursor: "pointer",
        backgroundColor: (dark) => !dark ? "white" : "rgba(20, 20, 20, 1)",
        color: (dark) => dark ? "white" : "rgba(20, 20, 20, 1)"
    },
    card: {
        margin: "1rem",
        borderRadius: "8px",
        borderCollapse: "separate",
        perspective: "1px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "60%",
        height: "80%",
        position: "relative",

        "@media (max-width: 1000px)": {
            width: "80%",
            height: "90%",
        },
        "@media (max-width: 500px)": {
            width: "96%",
            height: "60%",
        }
    },
    imageRel: {
        width: "100%",
        height: "calc(80% - 5.5rem)",
        position: "relative",
    },
    imageTag: {
        width: "100%",
        height: "calc(100%)",
        objectFit: "cover",
        borderRadius: "8px 8px 0 0",
    },
    details: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5rem",
        padding: "1rem",
    },
    detailsWrapper: {
        border: (dark) => dark ? "none" : "1px solid #E5E5E5",
        backgroundColor: (dark) => dark ? "rgba(20, 20, 20, 1)" : "white",
        borderRadius: "0 0 8px 8px",
        width: "100%",
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
    },
    sharing: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.3rem 1rem",
        background: "rgb(90,86,86)",
        background: "linear-gradient(360deg, rgba(90,86,86,0.5) 0%, rgba(143,143,145,0.2) 50%, rgba(255,255,255,0) 100%)",
    },
    leftButtons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    share: {
        height: "2rem",
        border: "1px solid white",
        color: "white",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.1rem 0.7rem",
        margin: "0.5rem",
        cursor: "pointer",
    },
    icon: {
        margin: "0 0.2rem",
        "& path": {
            height: "1.5rem",
        }
    },
    metrics: {
        display: "flex",
    },
    download: {
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
    },
    rel: {
        position: "relative",
        overflow: "visible",
    },
    popup: {
        position: "absolute",
        top: "110%",
        left: "0",
        backgroundColor: "black",
        width: "auto",
        whiteSpace: "pre",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
    },
    relatedTags: {
        fontSize: "1.2rem",
        fontWeight: "600",
        width: "100%",
        textAlign: "left",
        margin: "0.5rem 1.5rem"
    },
    wrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        flexWrap: "wrap",
    },
})