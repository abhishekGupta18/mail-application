import "./Trash.css";

import { NavLink } from "react-router-dom";
import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";

export const Trash = () => {
  const { state, dispatch } = useMailContext();
  return (
    <div className="trash-page">
      <Header />
      <div className="trash-mails">
        <h1>Deleted Mails</h1>
        <ul>
          {state?.trash?.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>Nothing In Trash</h3>
          ) : (
            state?.trash.map(({ mId, unread, isStarred, subject, content }) => (
              <div>
                <h3>{subject}</h3>
                <p>{content}</p>
                <div className="delete-function">
                  <NavLink className="detail-mail" to={`/${mId}`}>
                    View Details
                  </NavLink>
                  <button
                    className="restore-button"
                    onClick={() =>
                      dispatch({ type: "undoDelete", payload: mId })
                    }
                  >
                    restore
                  </button>
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
