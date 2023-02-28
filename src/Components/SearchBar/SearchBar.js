import React, { useState, useEffect } from "react";
import { searchBarStyles } from "./searchBarStyles";
import { ReactComponent as Search } from "../../Assets/Search.svg";
import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "keyword-autosuggest.p.rapidapi.com",
  },
};

const SearchBar = ({
  value,
  setValue,
  placeholder,
  suggest,
  setSuggest,
  setLabels,
  setShowTags,
  toggle,
  setToggle,
}) => {
  const classes = searchBarStyles();
  const [tags, setTags] = useState([]);

  async function getTags() {
    const res = await axios.get(
      "https://keyword-autosuggest.p.rapidapi.com/autosuggest",
      { ...options, params: { q: value } }
    );

    if (res.data) {
      setTags(res.data.result ?? []);
      setLabels(res.data.result ?? []);
    }
  }

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      if (value?.length >= 3) getTags();
    }, 100);

    const searchDelayTimeout = setTimeout(() => {
      setToggle(!toggle);
      setShowTags(true);
    }, 500);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(searchDelayTimeout);
    };
  }, [value]);

  return (
    <div className={classes.container}>
      <Search className={classes.searchIcon} />
      <input
        type="text"
        placeholder={placeholder}
        className={classes.searchInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value?.length > 0) {
            setSuggest(true);
          } else {
            setSuggest(false);
          }
        }}
      />
      <span
        className={classes.cross}
        onClick={() => {
          setValue("");
          setSuggest(false);
          setLabels([]);
          setShowTags(false);
        }}
      >
        {value?.length > 0 && "x"}
      </span>

      {suggest && tags?.length > 0 && (
        <div className={classes.suggestionWrapper}>
          {tags.slice(0, 10).map((text) => {
            return (
              <div
                onClick={() => {
                  setValue(text);
                  setSuggest(false);
                }}
                className={classes.listItem}
              >
                {text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
