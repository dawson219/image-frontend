import React, { useState } from "react";
import { bannerStyles } from "./bannerStyles";
import SearchBar from "../SearchBar/SearchBar";
import Tag from "../Tag/Tag";

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
          />
          <div
            onClick={() => {
              setToggle(!toggle);
              setSuggest(false);
              setShowTags(true)
            }}
            className={classes.search}
          >
            Search
          </div>
        </div>
      </div>
      <div className={classes.tagContainer}>
        {tags?.length > 0 && showTags && (
          <div className={classes.relatedTags}>Related tags</div>
        )}
        {tags?.length > 0 && showTags &&
          tags.map((tag) => {
            return (
              <Tag
                tag={tag}
                setToggle={setToggle}
                toggle={toggle}
                setValue={setValue}
              />
            );
          })}
      </div>
    </>
  );
};

export default Banner;
