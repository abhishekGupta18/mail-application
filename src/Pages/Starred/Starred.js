import { NavLink } from "react-router-dom";
import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";
export const Starred = () => {
  const { state, dispatch } = useMailContext();
  return (
    <>
      <Header />
      <ul>
        {state?.inbox
          ?.filter((item) => item?.isStarred)
          ?.map(({ mId, unread, isStarred, subject, content }) => (
            <li>
              <h3>{subject}</h3>
              <p>{content}</p>
              <NavLink to={`/${mId}`}>View Details</NavLink>
              <button
                onClick={() => dispatch({ type: "deleteMail", payload: mId })}
              >
                delete
              </button>
              <button
                onClick={() => dispatch({ type: "reportSpam", payload: mId })}
              >
                report spam
              </button>
              <button
                onClick={() => dispatch({ type: "marksAsRead", payload: mId })}
              >
                {unread ? "mark as read" : "mark as unread"}
              </button>
              <button
                onClick={() => dispatch({ type: "starMail", payload: mId })}
              >
                {isStarred ? "remove star" : "star"}
              </button>
              <button
                onClick={() => dispatch({ type: "marksAsRead", payload: mId })}
              >
                {unread ? "mark as read" : "mark as unread"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
