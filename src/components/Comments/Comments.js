import "./Comments.scss";
import Comment from "../Comment/Comment";

const Comments = ({ currentcomments }) => {
  const commentsArray = currentcomments.comments;
  console.log(commentsArray);
  return (
    <div>
      {commentsArray.map((comment) => (
        <Comment
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default Comments;
