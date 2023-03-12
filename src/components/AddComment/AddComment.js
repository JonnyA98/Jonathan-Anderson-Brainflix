import "./AddComment.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const AddComment = ({
  addComment,
  text,
  changeText,
  textPlaceholder,
  textClass,
}) => {
  return (
    <form className="add-comment" onSubmit={addComment}>
      <img className="add-comment__icon" src={avatar} alt="Mohan Muruge" />
      <div className="add-comment__big-wrapper">
        <div className="add-comment__wrapper">
          <h3 className="add-comment__header">Join the Conversation</h3>
          <textarea
            className={textClass}
            name="post"
            cols="30"
            rows="5"
            value={text}
            placeholder={textPlaceholder}
            onChange={(e) => changeText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="add-comment__button">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
