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
        <h1> Spam</h1>
        <ul>
          {state?.spam.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>No Spam Mails</h3>
          ) : (
            state?.spam?.map(({ mId, unread, isStarred, subject, content }) => (
              <div>
                <h4>{subject}</h4>
                <p>{content}</p>
                <div className="spam-function">
                  <NavLink className="detail-mail" to={`/${mId}`}>
                    View Details
                  </NavLink>
                  <div className="spam-button">
                    <button
                      className="read-button"
                      onClick={() =>
                        dispatch({ type: "marksAsRead", payload: mId })
                      }
                    >
                      {unread ? "mark as read" : "mark as unread"}
                    </button>
                    <button
                      className="not-spam"
                      onClick={() =>
                        dispatch({ type: "undoSpam", payload: mId })
                      }
                    >
                      not spam
                    </button>
                  </div>
                </div>
                <hr style={{ margin: "20px 0" }} />
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
