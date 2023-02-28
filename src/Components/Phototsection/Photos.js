import React, { useEffect, useState, useRef } from "react";
import { createApi } from "unsplash-js";
import ImageCard from "../ImageCard/ImageCard";
import "./photoStyles.css";
import { Loader } from "../Loader/Loader";

const unsplashApi = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});

const Photos = ({ setPreview, value, toggle, dark }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef();

  useEffect(() => {
    fetchOnScroll(value, true);
  }, [toggle]);

  async function fetchOnScroll(searchers, clear) {
    if (loading) return;
    if (unsplashApi) {
      const searchObj = {
        count: 27,
      };
      if (searchers) {
        searchObj.query = searchers;
      }
      try {
        setLoading(true);
        const photo = await unsplashApi.photos.getRandom(searchObj);

        let array = clear ? [] : photos;
        let temparr = [];
        photo.response.forEach((item) => {
          if (temparr.length === 9) {
            array.push(temparr);
            temparr = [];
          }
          temparr.push(item);
        });
        array.push(temparr);
        setPhotos(array);
        setLoading(false);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className={`cardsWrapper ${dark ? "dark" : ""}`}>
      {!loading &&
        photos.map((photoSet) => {
          return (
            <div className="card-grid">
              {photoSet.map((pic, i) => {
                return (
                  <ImageCard
                    image={pic.urls.regular ?? pic.urls.full}
                    userImage={pic.user.profile_image.medium}
                    handle={pic.user.username}
                    userName={pic.user.name}
                    likes={pic.likes}
                    setPreview={setPreview}
                    item={pic}
                    dark={dark}
                    idx={i}
                    key={pic.id}
                  />
                );
              })}
            </div>
          );
        })}
      <div ref={loaderRef} className={"loaderWrapper"}>
        {loading && (
          <Loader h="4rem" w="4rem" b="6px" bk="#eaf0f6" clr="#cbd6e2" t="1s" />
        )}
      </div>
    </div>
  );
};

export default Photos;
