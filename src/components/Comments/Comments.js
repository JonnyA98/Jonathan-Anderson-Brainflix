import "./Comments.scss";
import Comment from "../Comment/Comment";

const Comments = ({ currentcomments }) => {
  const commentsArray = currentcomments.comments;
  console.log(commentsArray);
  return (
    <div className="comments">
      {commentsArray.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default Comments;
