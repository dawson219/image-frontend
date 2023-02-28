import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tagContainer: {
    backgroundColor: "#ECECEC",
    margin: "0.5rem 1rem",
    display: "inline-block",
    padding: "0.4em 0.7rem",
    whiteSpace: "pre",
    color: "black",
    cursor: "pointer",
  },
});

const Tag = ({ tag, setValue, setToggle, toggle, setPreview }) => {
  const classes = useStyles();
  return (
    <div
      onClick={() => {
        setValue(tag);
        setToggle(!toggle);
        setPreview(null)
      }}
      className={classes.tagContainer}
    >
      {tag}
    </div>
  );
};

export default Tag;
