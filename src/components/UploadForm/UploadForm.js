import "./UploadForm.scss";
import image from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
const UploadForm = ({ description }) => {
  return (
    <div className="upload-form">
      <div className="upload-form__header-wrapper">
        <h1 className="upload-form__header">Upload Video</h1>
      </div>
      <article className="upload-form__block">
        <div className="upload-form__video">
          <h2 className="upload-form__mini-header">Video Thumbnail</h2>
          <img className="upload-form__poster" src={image} alt="bike" />
        </div>
        <div className="upload-form__text">
          <label className="upload-form__mini-header" htmlFor="title">
            Title your video
          </label>
          <input
            className="upload-form__input"
            name="title"
            type="text"
            placeholder="Add a title to your video"
          />
          <label className="upload-form__mini-header" htmlFor="description">
            Add a video description
          </label>
          <textarea
            className="upload-form__input upload-form__input--text-area"
            name="description"
            cols="30"
            rows="5"
            value={description}
          ></textarea>
        </div>
      </article>
      <div className="upload-form__publish-section">
        <button className="upload-form__button">Publish</button>
        <Link className="upload-form__cancel" to={`/`}>
          <h3 className="upload-form__cancel-text">Cancel</h3>
        </Link>
      </div>
    </div>
  );
};

export default UploadForm;
