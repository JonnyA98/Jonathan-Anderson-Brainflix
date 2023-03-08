import { useState, useEffect } from "react";
import axios from "axios";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import { useParams } from "react-router-dom";
import AddComment from "../../components/AddComment/AddComment";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

import "./Home.scss";

const Home = () => {
  const key = "4cc34eef-8f4a-4587-ad97-0594e067e347";

  const defaultText = "Add a new comment";
  const [text, setText] = useState(defaultText);
  const changeText = (newText) => {
    setText(newText);
  };

  const { videoId } = useParams();

  const [videoSmallList, setVideoSmallList] = useState(null);
  const [videoDetails, setvideoDetails] = useState(null);

  const getVideoList = async () => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/?api_key=4cc34eef-8f4a-4587-ad97-0594e067e347`
    );
    setVideoSmallList(data);
  };

  const getVideoDetails = async (id) => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=${key}`
    );
    setvideoDetails(data);
  };

  useEffect(() => {
    try {
      getVideoList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (videoSmallList) {
      try {
        if (!videoId) {
          getVideoDetails(videoSmallList[0].id);
        } else {
          getVideoDetails(videoId);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [videoSmallList, videoId]);

  if (!videoSmallList || !videoDetails) {
    return <h1>LOADING!!!!!!!!!</h1>;
  }

  return (
    <>
      <CurrentVideo videoImage={videoDetails} />
      <div className="home__wrapper">
        <div className="home__vid-desc-wrapper">
          <VideoDescription currentdescription={videoDetails} />
          <AddComment text={text} changeText={changeText} />
          <Comments currentcomments={videoDetails} />
        </div>
        <VideoList
          videoSmallList={videoSmallList}
          currentvideo={videoDetails}
        />
      </div>
    </>
  );
};
export default Home;
