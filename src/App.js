import { useState } from "react";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import videodetails from "./assets/data/video-details.json";
import AddComment from "./components/AddComment/AddComment";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

import "./styles/App.scss";

function App() {
  const [video, setVideo] = useState(videodetails[0]);
  const [VideoDetailsList, setVideoList] = useState(videodetails);

  const videoHandler = (id) => {
    console.log(id);
    // event.prevertDefault();
    // console.log(event);

    // i = event.target.value;

    // const newVideo = videodetails[i];

    // setVideo([...video, newVideo]);

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
      <VideoList videoHandler={videoHandler} currentvideo={video} />
    </>
  );
}

export default App;
