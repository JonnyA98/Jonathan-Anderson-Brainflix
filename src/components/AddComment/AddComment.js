import "./AddComment.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const AddComment = ({ text, changeText }) => {
  console.log(text);
  return (
    <form className="add-comment">
      <img className="add-comment__icon" src={avatar} alt="Mohan Muruge" />
      <div className="add-comment__big-wrapper">
        <div className="add-comment__wrapper">
          <h3 className="add-comment__header">Join the Conversation</h3>
          <textarea
            className="add-comment__text"
            name="post"
            cols="30"
            rows="5"
            value={text}
            onChange={(e) => changeText(e.target.value)}
          ></textarea>
        </div>
        <button className="add-comment__button">Add Comment</button>
      </div>
    </form>
  );
};

export default AddComment;
