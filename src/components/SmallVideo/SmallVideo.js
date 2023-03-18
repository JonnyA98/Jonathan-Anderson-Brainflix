import "./SmallVideo.scss";

const SmallVideo = ({ picture, title, name, clickHandler }) => {
  return (
    <article className="small-video" onClick={clickHandler}>
      <div className="small-video__img-wrapper">
        <img className="small-video__image" src={picture} alt={name} />
      </div>
      <div className="small-video__text">
        <h3 className="small-video__title">{title}</h3>
        <p className="small-video__creator">{name}</p>
      </div>
    </article>
  );
};

export default SmallVideo;
