import "./CurrentVideo.scss";

const CurrentVideo = ({ currentvideo }) => {
  return <video poster={currentvideo.image}></video>;
};

export default CurrentVideo;
