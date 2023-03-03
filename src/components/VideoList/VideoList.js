import videos from "../../assets/data/videos.json";

const VideoList = ({ currentvideo }) => {
  let currentVideoList = [];
  videos.forEach((video) => {
    if (video.id !== currentvideo.id) {
      currentVideoList.push(video);
    }
  });
  console.log(currentVideoList);
};

export default VideoList;
