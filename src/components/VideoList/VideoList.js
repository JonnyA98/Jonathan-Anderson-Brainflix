import SmallVideo from "../SmallVideo/SmallVideo";
import "./VideoList.scss";

const VideoList = ({ videoSmallList, currentvideo, videoHandler }) => {
  let currentVideoList = [];
  videoSmallList.forEach((video) => {
    if (video.id !== currentvideo.id) {
      currentVideoList.push(video);
    }
  });
  return (
    <div className="video-list">
      <h3 className="video-list__header">Next Videos</h3>
      {currentVideoList.map((smallVideo) => (
        <SmallVideo
          clickHandler={() => videoHandler(smallVideo.id)}
          key={smallVideo.id}
          picture={smallVideo.image}
          title={smallVideo.title}
          name={smallVideo.channel}
        />
      ))}
    </div>
  );
};

export default VideoList;
