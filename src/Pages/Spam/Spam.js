import "./Spam.css";

import { NavLink } from "react-router-dom";
import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";
export const Spam = () => {
  const { state, dispatch } = useMailContext();
  return (
    <div className="spam-page">
      <Header />
      <div className="spam-mails">
        <h1>This is Spam</h1>
        <ul>
          {state?.spam?.map(({ mId, unread, isStarred, subject, content }) => (
            <div>
              <h3>{subject}</h3>
              <p>{content}</p>
              <NavLink to={`/${mId}`}>View Details</NavLink>
              <button
                onClick={() => dispatch({ type: "undoSpam", payload: mId })}
              >
                not spam
              </button>
              <button
                onClick={() => dispatch({ type: "marksAsRead", payload: mId })}
              >
                {unread ? "mark as read" : "mark as unread"}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
