import "./CurrentVideo.scss";

const CurrentVideo = ({ currentvideo }) => {
  return (
    <video controls className="video" poster={currentvideo.image}>
      Your browser does not support the video tag.
    </video>
  );
};

export default CurrentVideo;
