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
  console.log(video);
  return (
    <>
      <Header />
      <CurrentVideo currentvideo={video} />
      <VideoDescription currentdescription={video} />
      <AddComment />
      <Comments currentcomments={video} />
      <VideoList currentvideo={video} />
    </>
  );
}

export default App;
