import "./CurrentVideo.scss";

const CurrentVideo = (props) => {
  return (
    <div className="video__wrapper">
      <video controls className="video__poster" poster={props.image}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CurrentVideo;
