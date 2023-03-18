import SmallVideo from "../SmallVideo/SmallVideo";
import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = ({ videoSmallList, currentvideo }) => {
  let currentVideoList = videoSmallList.filter((video) => {
    if (video.id !== currentvideo.id) {
      return video;
    }
  });

  return (
    <div className="video-list">
      <h3 className="video-list__header">Next Videos</h3>
      {currentVideoList.map((smallVideo) => (
        <Link
          className="video-list__link"
          to={`/videos/${smallVideo.id}`}
          key={smallVideo.id}
        >
          <SmallVideo
            picture={smallVideo.image}
            title={smallVideo.title}
            name={smallVideo.channel}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
