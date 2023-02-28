import React, { useEffect, useState } from "react";
import { fullPreviewStyles } from "./fullPreviewStyles";
import { ReactComponent as Like } from "../../Assets/like.svg";
import { ReactComponent as I } from "../../Assets/ib.svg";
import { ReactComponent as Share } from "../../Assets/Share.svg";
import FileSaver from "file-saver";
import Tag from "../Tag/Tag";
import axios from "axios";

export const downloadImage = async (id, photo) => {
  FileSaver.saveAs(photo, `download-${id}.jpg`);
};

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "keyword-autosuggest.p.rapidapi.com",
  },
};

const words = ["a", "an", "the", "for", "with", "he", "her", "they", "them", "him", "she", "there", "but"]

const FullPreview = ({
  image,
  userImage,
  handle,
  userName,
  likes,
  downloads,
  setPreview,
  id,
  preview,
  dark,
  idx,
  value,
  setValue,
  toggle,
  setToggle,
}) => {
  const classes = fullPreviewStyles(dark);
  const [showPopup, setShowPopup] = useState(false);
  const [tags, setTags] = useState([]);
  const description = preview.description ?? preview.alt_description ?? "";
  const array = description.split(" ");

  async function getTags(value) {
    const res = await axios.get(
      "https://keyword-autosuggest.p.rapidapi.com/autosuggest",
      { ...options, params: { q: value } }
    );

    if (res.data) {
      setTags([...tags, ...res.data.result.slice(0,8)]);
    }
  }

  const fetchSuggestions = async () => {
    let counter = 0;
    const promises = array.map(async (prompt) => {
      if(counter > 5) return true
      if(prompt.length > 2 && !words.includes(prompt.toLowerCase())){
        counter = counter + 1;
        return await getTags(prompt);
      }

      return true
    });

    const data = await Promise.all(promises);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText(preview.urls.raw);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className={classes.backdrop}>
      <div className={`${classes.card} card-${idx}`}>
        <div className={classes.imageRel}>
          <img src={image} alt="" className={classes.imageTag} />
          <div className={classes.sharing}>
            <div className={classes.leftButtons}>
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${classes.share} ${classes.rel}`}
              >
                <Share className={classes.icon} />
                Share
                {showPopup && (
                  <div className={classes.popup}>Copied to Clipboard!</div>
                )}
              </div>
              <div className={classes.share}>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={preview.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <I className={classes.icon} />
                  Info
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                downloadImage(id, image);
              }}
              className={classes.download}
            >
              Download
            </div>
          </div>
        </div>
        <div className={classes.detailsWrapper}>
          <div className={classes.details}>
            <div className={classes.data}>
              <div className={classes.userIcon}>
                <img src={userImage} alt="" className={classes.useImg} />
              </div>
              <div className={classes.userNameSection}>
                <div className={classes.userName}>{userName}</div>
                <div className={classes.userHandle}>@{handle}</div>
              </div>
            </div>
            <div className={classes.metrics}>
              <div
                className={classes.likeCount}
                style={{ marginRight: "0.5rem" }}
              >
                {downloads > 1000
                  ? Math.floor(downloads / 1000) + "k"
                  : downloads}{" "}
                downloads
              </div>
              <div className={classes.likeCount}>
                <Like className={classes.like} />
                &nbsp; {likes > 1000 ? Math.floor(likes / 1000) + "k" : likes}
              </div>
            </div>
          </div>
          <div className={classes.relatedTags}>Related tags</div>
          <div className={classes.wrapper}>
            {tags.map((tag) => {
              return (
                <Tag
                  tag={tag}
                  setToggle={setToggle}
                  toggle={toggle}
                  setValue={setValue}
                  setPreview={setPreview}
                />
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            setPreview(null);
          }}
          className={classes.cross}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default FullPreview;
