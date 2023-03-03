import "./SmallVideo.scss";

const SmallVideo = ({ picture, title, name, clickHandler }) => {
  return (
    <div onClick={clickHandler}>
      <img className="small-video__image" src={picture} alt={name} />
      <div>
        <h3>{title}</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SmallVideo;
