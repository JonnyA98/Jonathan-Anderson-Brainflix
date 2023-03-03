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
  const [video, setVideo] = useState(videodetails[0]);

  // list of all video details
  const [VideoDetailsList, setVideoList] = useState(videodetails);
  const [videoSmallList, setVideoSmallList] = useState(videoSmallListData);

  const videoHandler = (id) => {
    console.log(id);

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
      <VideoDescription currentdescription={video} />
      <AddComment />
      <Comments currentcomments={video} />
      <VideoList
        videoSmallList={videoSmallList}
        videoHandler={videoHandler}
        currentvideo={video}
      />
    </>
  );
}

export default App;
