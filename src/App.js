import { useState } from "react";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import videodetails from "./assets/data/video-details.json";
import AddComment from "./components/AddComment/AddComment";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import videoSmallListData from "./assets/data/videos.json";

import "./styles/App.scss";

function App() {
  // current video
  const defaultText = "Add a new comment";
  const [text, setText] = useState(defaultText);

  const changeText = (newText) => {
    setText(newText);
  };

  const [video, setVideo] = useState(videodetails[0]);

  // list of all video details
  const [VideoDetailsList, setVideoList] = useState(videodetails);
  const [videoSmallList, setVideoSmallList] = useState(videoSmallListData);

  const videoHandler = (id) => {
    // return video object from details list where id matches
    const video = VideoDetailsList.find((video) => {
      if (video.id === id) {
        return video;
      }
    });

    setVideo(video);
  };

  return (
    <>
      <Header />
      <CurrentVideo currentvideo={video} />
      <div className="app__wrapper">
        <div className="app__vid-desc-wrapper">
          <VideoDescription currentdescription={video} />
          <AddComment text={text} changeText={changeText} />
          <Comments currentcomments={video} />
        </div>
        <VideoList
          videoSmallList={videoSmallList}
          videoHandler={videoHandler}
          currentvideo={video}
        />
      </div>
    </>
  );
}

export default App;
