import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Photos from "./Components/Phototsection/Photos";
import FullPreview from "./Components/FullPreview/FullPreview";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [preview, setPreview] = useState(null);
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState("");
  const [suggest, setSuggest] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [tags, setTags] = useState([])
  const [showTags, setShowTags] = useState(false)
  return (
    <div className="App">
      <div className="mainBody">
        <Navbar
          suggest={suggest}
          setSuggest={setSuggest}
          tab={tab}
          setTab={setTab}
          value={value}
          setValue={setValue}
          toggle={toggle}
          setToggle={setToggle}
          dark={dark}
          setDark={setDark}
          setTags={setTags}
        />
        { (
          <Banner
            toggle={toggle}
            setToggle={setToggle}
            suggest={suggest}
            setSuggest={setSuggest}
            value={value}
            setValue={setValue}
            tags={tags}
            dark={dark}
            setTags={setTags}
            showTags={showTags}
            setShowTags={setShowTags}
          />
        )}
        <Photos
          dark={dark}
          setDark={setDark}
          toggle={toggle}
          value={value}
          setPreview={setPreview}
        />
      </div>
      {preview && (
        <FullPreview
          image={preview.urls.regular ?? preview.urls.full}
          userImage={preview.user.profile_image.medium}
          handle={preview.user.username}
          userName={preview.user.name}
          preview={preview}
          downloads={preview.downloads}
          setPreview={setPreview}
          id={preview.id}
          likes={preview.likes}
          dark={dark}
          setDark={setDark}
        />
      )}
    </div>
  );
}

export default App;
