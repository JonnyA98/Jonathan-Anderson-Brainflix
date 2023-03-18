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
  const [text, setText] = useState("");
  const [textClass, setTextClass] = useState("add-comment__text");
  const [textPlaceholder, setTextPlaceHolder] = useState("Add a new comment");
  const changeText = (newText) => {
    setText(newText);
  };

  const { videoId } = useParams();

  const [videoSmallList, setVideoSmallList] = useState(null);
  const [videoDetails, setvideoDetails] = useState(null);

  const getVideoList = async () => {
    const { data } = await axios.get(`http://localhost:8080/videos`);
    setVideoSmallList(data);
  };

  const getVideoDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:8080/videos/${id}`);
    setvideoDetails(data);
    console.log(videoDetails);
  };

  const addCommentHandle = async (event) => {
    event.preventDefault();
    if (text) {
      try {
        await axios
          .post(`http://localhost:8080/videos/${videoDetails.id}/comments`, {
            name: "Mohan Muruge",
            comment: text,
          })
          .then(() => {
            setText("");
            setTextPlaceHolder("Add a new comment");
            setTextClass("add-comment__text");
          })
          .then(() => {
            getVideoDetails(videoDetails.id);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setTextPlaceHolder("You can't leave this empty!");
      setTextClass("add-comment__text add-comment__text--invalid");
    }
  };

  useEffect(() => {
    try {
      getVideoList();
    } catch (error) {
      console.log(error);
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
      } catch (error) {
        console.log(error);
      }
    }
  }, [videoSmallList, videoId]);

  if (!videoSmallList || !videoDetails) {
    return <h1>LOADING!!!!!!!</h1>;
  }

  return (
    <>
      <CurrentVideo videoImage={videoDetails} />
      <div className="home__wrapper">
        <div className="home__vid-desc-wrapper">
          <VideoDescription currentdescription={videoDetails} />
          <AddComment
            addComment={addCommentHandle}
            text={text}
            changeText={changeText}
            textPlaceholder={textPlaceholder}
            textClass={textClass}
          />
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
