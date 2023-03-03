import "./Comment.scss";

const Comment = ({ key, comment, name, date }) => {
  const newDate = new Date(date);
  const usefulDate = newDate.toLocaleDateString();

  return (
    <div className="comments__comment">
      <div className="comments__icon"></div>
      <div className="comments__text">
        <div className="comments__first-line">
          <h3 className="comments__name">{name}</h3>
          <p className="comments__date">{usefulDate}</p>
        </div>
        <p className="comments__copy">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
