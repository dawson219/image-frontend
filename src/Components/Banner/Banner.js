import React, { useState, useRef, useEffect } from "react";
import { bannerStyles } from "./bannerStyles";
import SearchBar from "../SearchBar/SearchBar";
import Tag from "../Tag/Tag";

const useOutsideAlerter = (ref, handleClose) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClose]);
};

const Banner = ({
  setSuggest,
  toggle,
  setToggle,
  value,
  setValue,
  suggest,
  tags,
  dark,
  setTags,
  showTags,
  setShowTags,
}) => {
  const classes = bannerStyles(dark);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setSuggest);

  return (
    <>
      <div className={`${classes.bannerWrapper} banner`}>
        <div className={classes.heading}>
          Download High Quality Images by creators
        </div>
        <div className={classes.pTag}>
          Over 2.4 million+ stock Images by our talented community
        </div>
        <div className={classes.searchContainer}>
          <SearchBar
            suggest={suggest}
            setSuggest={setSuggest}
            value={value}
            setValue={setValue}
            placeholder={
              "Search high resolution Images, categories, wallpapers"
            }
            setLabels={setTags}
            setShowTags={setShowTags}
            setToggle={setToggle}
            toggle={toggle}
          />
        </div>
      </div>
      <div className={classes.tagContainer} ref={wrapperRef}>
        {tags?.length > 0 && showTags && (
          <>
            <div className={classes.relatedTags}>Related tags</div>
            {tags.map((tag) => {
              return (
                <Tag
                  tag={tag}
                  setToggle={setToggle}
                  toggle={toggle}
                  setValue={setValue}
                  setPreview={()=>{}}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Banner;
