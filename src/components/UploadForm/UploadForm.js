import "./UploadForm.scss";
import image from "../../assets/images/Upload-video-preview.jpg";
const UploadForm = ({ description }) => {
  return (
    <>
      <h1 className="upload-form__header">Upload Video</h1>
      <article className="upload-form__block">
        <div className="upload-form__video">
          <h2 className="upload-form__mini-header">Video Thumbnail</h2>
          <img className="upload-form__poster" src={image} alt="bike" />
        </div>
        <div className="upload-form__text">
          <label htmlFor="title">Title your video</label>
          <input
            name="title"
            type="text"
            placeholder="Add a title to your video"
          />
          <label htmlFor="description">Add a video description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
          ></textarea>
        </div>
      </article>
      <div className="upload-form__publish-section">
        <button class="upload-form__button"></button>
        <h3 class="upload-form__cancel">Cancel</h3>
      </div>
    </>
  );
};

export default UploadForm;
