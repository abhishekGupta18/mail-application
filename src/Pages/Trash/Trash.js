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
          {state?.trash.map(({ mId, unread, isStarred, subject, content }) => (
            <div>
              <h3>{subject}</h3>
              <p>{content}</p>
              <NavLink to={`/${mId}`}>View Details</NavLink>
              <button
                onClick={() => dispatch({ type: "undoDelete", payload: mId })}
              >
                restore
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
