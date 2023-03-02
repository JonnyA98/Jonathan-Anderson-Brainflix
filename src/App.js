import { useState } from "react";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import videodetails from "./assets/data/video-details.json";

import "./styles/App.scss";

function App() {
  const [video, setVideo] = useState(videodetails[0]);
  console.log(video);
  return (
    <>
      <Header />
      <CurrentVideo currentvideo={video} />
      <VideoDescription currentdescription={video} />
    </>
  );
}

export default App;
