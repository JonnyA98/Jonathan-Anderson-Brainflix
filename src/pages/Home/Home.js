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
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/?api_key=${key}`
    );
    setVideoSmallList(data);
  };

  const getVideoDetails = async (id) => {
    const { data } = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=${key}`
    );
    setvideoDetails(data);
  };

  const addCommentHandle = async (event) => {
    event.preventDefault();
    if (text) {
      try {
        await axios
          .post(
            `https://project-2-api.herokuapp.com/videos/${videoDetails.id}/comments?api_key=${key}`,
            {
              name: "Mohan Muruge",
              comment: text,
            }
          )
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
