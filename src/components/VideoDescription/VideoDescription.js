import "./VideoDescription.scss";

const VideoDescription = ({ currentdescription }) => {
  const timestamp = currentdescription.timestamp;
  const date = new Date(timestamp).toLocaleDateString();
  const numberOfComments = currentdescription.comments.length;

  return (
    <div className="vid-desc">
      <h1 className="vid-desc__header">{currentdescription.title}</h1>
      <div className="vid-desc__stats">
        <div className="vid-desc__stats-box">
          <h2 className="vid-desc__name">By {currentdescription.channel}</h2>
          <p className="vid-desc__date">{date}</p>
        </div>
        <div className="vid-desc__stats-box">
          <p className="vid-desc__views">{currentdescription.views}</p>
          <p className="vid-desc__likes">{currentdescription.likes}</p>
        </div>
      </div>
      <div className="vid-desc__description">
        {currentdescription.description}
      </div>
      <h3 className="vid-desc__num-comments">{`${numberOfComments} Comments`}</h3>
    </div>
  );
};

export default VideoDescription;
