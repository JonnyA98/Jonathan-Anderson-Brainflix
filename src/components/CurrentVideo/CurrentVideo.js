import "./CurrentVideo.scss";

const CurrentVideo = ({ currentvideo }) => {
  return (
    <div className="video__wrapper">
      <video controls className="video__poster" poster={currentvideo.image}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CurrentVideo;
