const Comment = ({ key, comment, name, timestamp }) => {
  return (
    <div className="comments__comment">
      <div className="comments__icon"></div>
      <div className="comments__text">
        <div className="comments__first-line">
          <p className="comments__name">{name}</p>
          <p className="comments__date">{timestamp}</p>
        </div>
        <p className="comments__copy">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
