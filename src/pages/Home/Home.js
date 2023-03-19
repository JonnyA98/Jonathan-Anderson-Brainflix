import { useState, useEffect, CSSProperties } from "react";
import { DotLoader } from "react-spinners";

import axios from "axios";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import { useParams } from "react-router-dom";
import AddComment from "../../components/AddComment/AddComment";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

import "./Home.scss";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0065ad",
};

const Home = () => {
  const [text, setText] = useState("");
  const [textClass, setTextClass] = useState("add-comment__text");
  const [textPlaceholder, setTextPlaceHolder] = useState("Add a new comment");
  let [loading] = useState(true);
  let [color] = useState("#0095ff");
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
  }, [videoId, videoSmallList]);

  if (!videoSmallList || !videoDetails) {
    return (
      <div className="home__spinner-wrapper">
        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div>
    );
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
