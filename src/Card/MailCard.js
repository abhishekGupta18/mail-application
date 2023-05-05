import "./MailCard.css";

import { NavLink } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import DeleteIcon from "@mui/icons-material/Delete";

export const MailCard = ({ mId, unread, isStarred, subject, content }) => {
  const { dispatch } = useMailContext();
  return (
    <div className="mail-card">
      <div className="sub-star">
        <h4>{subject}</h4>
        <button
          style={{ color: isStarred ? "#f59e0b" : "#27272a" }}
          onClick={() => dispatch({ type: "starMail", payload: mId })}
        >
          {isStarred ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
        </button>
      </div>
      <div className="mail-content">
        <p>{content}</p>
      </div>

      <div className="mail-functions">
        <NavLink className="detail-mail" to={`/${mId}`}>
          View Details
        </NavLink>
        <div className="mail-buttons">
          <button
            className="delete-button"
            onClick={() => dispatch({ type: "deleteMail", payload: mId })}
          >
            <DeleteIcon />
          </button>
          <button
            className="report-button"
            onClick={() => dispatch({ type: "reportSpam", payload: mId })}
          >
            report spam
          </button>

          <button
            className="read-button"
            onClick={() => dispatch({ type: "marksAsRead", payload: mId })}
          >
            {unread ? "mark as read" : "mark as unread"}
          </button>
        </div>
      </div>
    </div>
  );
};
