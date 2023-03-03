import SmallVideo from "../SmallVideo/SmallVideo";

const VideoList = ({ videoSmallList, currentvideo, videoHandler }) => {
  let currentVideoList = [];
  videoSmallList.forEach((video) => {
    if (video.id !== currentvideo.id) {
      currentVideoList.push(video);
    }
  });
  return (
    <div>
      {currentVideoList.map((smallVideo) => (
        <SmallVideo
          clickHandler={() => videoHandler(smallVideo.id)}
          picture={smallVideo.image}
          title={smallVideo.title}
          name={smallVideo.channel}
        />
      ))}
    </div>
  );
};

export default VideoList;
