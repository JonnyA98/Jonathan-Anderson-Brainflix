import "./Comment.scss";
import moment from "moment";
moment().format();

const Comment = ({ comment, name, date }) => {
  const newDate = new Date(date);

  const momentTest = moment(newDate, "YYYYMMDD").fromNow();

  return (
    <div className="comments__comment">
      <div className="comments__icon"></div>
      <div className="comments__text">
        <div className="comments__first-line">
          <h3 className="comments__name">{name}</h3>
          <p className="comments__date">{momentTest}</p>
        </div>
        <p className="comments__copy">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
