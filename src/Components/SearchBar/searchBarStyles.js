import { createUseStyles } from "react-jss";

export const searchBarStyles = createUseStyles({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        background: "#FAFAFA",
        border: "1px solid #ECECEC",
        boxShadow: "inset 0px 4px 19px rgba(0, 0, 0, 0.05)",
        borderRadius: "6px",
        padding: "0.1rem 1rem",
        position: "relative",
    },
    searchIcon: {
        marginRight: "0.6rem",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        outline: "none",
        border: "none",
        background: "#FAFAFA",
    },
    cross: {
        fontSize: "1.1rem",
        cursor: "pointer",
        fontWeight: "500",
        opacity: "0.6",
        color: "rgba(51, 51, 51, 1)",
    },
    suggestionWrapper: {
        position: "absolute",
        width: "100%",
        maxHeight: "240px",
        left: "0",
        top: "3rem",
        background: "#FFFFFF",
        border: "1px solid #E5E5E5",
        boxShadow: "0 0 3px #E5E5E5",
        borderRadius: "8px",
        overflowY: "auto",
        zIndex: "100",
    },
    listItem: {
        width: "100%",
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        textAlign: "left",
        padding: "0.4rem 0.6rem",
        fontSize: "0.8rem",
        fontWeight: "500",
        cursor: "pointer",
        color: "rgba(51, 51, 51, 1)",

        "&:hover": {
            backgroundColor: "rgba(150,150,150,0.1)"
        }
    }
})