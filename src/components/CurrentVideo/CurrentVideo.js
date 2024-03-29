import "./CurrentVideo.scss";

const CurrentVideo = ({ videoImage }) => {
  return (
    <div className="video__wrapper">
      <video controls className="video__poster" poster={videoImage.image}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CurrentVideo;
