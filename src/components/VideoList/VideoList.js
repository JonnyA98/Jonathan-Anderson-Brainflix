import videos from "../../assets/data/videos.json";
import SmallVideo from "../SmallVideo/SmallVideo";

const VideoList = ({ currentvideo, videoHandler }) => {
  let currentVideoList = [];
  videos.forEach((video) => {
    if (video.id !== currentvideo.id) {
      currentVideoList.push(video);
    }
  });
  console.log(currentVideoList);
  return (
    <div>
      {currentVideoList.map((smallVideo) => (
        <SmallVideo
          onClick={() => videoHandler(smallVideo.id)}
          picture={smallVideo.image}
          title={smallVideo.title}
          name={smallVideo.channel}
        />
      ))}
    </div>
  );
};

export default VideoList;
