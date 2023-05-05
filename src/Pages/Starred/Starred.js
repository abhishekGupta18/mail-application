import "./Starred.css";

import { NavLink } from "react-router-dom";
import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import DeleteIcon from "@mui/icons-material/Delete";

export const Starred = () => {
  const { state, dispatch } = useMailContext();
  return (
    <div className="starred-page">
      <Header />
      <div className="starred-mails">
        <h1>Starred </h1>

        <ul>
          {state?.inbox?.filter((item) => item?.isStarred).length === 0 ? (
            <h3 style={{ textAlign: "center" }}>No Starred Mails</h3>
          ) : (
            state?.inbox
              ?.filter((item) => item?.isStarred)
              ?.map(({ mId, unread, isStarred, subject, content }) => (
                <li style={{ listStyle: "none" }}>
                  <div className="subject-star">
                    <h4>{subject}</h4>
                    <button
                      style={{ color: isStarred ? "#f59e0b" : "#27272a" }}
                      onClick={() =>
                        dispatch({ type: "starMail", payload: mId })
                      }
                    >
                      {isStarred ? (
                        <StarRoundedIcon />
                      ) : (
                        <StarOutlineRoundedIcon />
                      )}
                    </button>
                  </div>

                  <p>{content}</p>

                  <div className="star-function">
                    <NavLink className="detail-mail" to={`/${mId}`}>
                      View Details
                    </NavLink>
                    <div className="star-buttons">
                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch({ type: "deleteMail", payload: mId })
                        }
                      >
                        <DeleteIcon />
                      </button>
                      <button
                        className="report-button"
                        onClick={() =>
                          dispatch({ type: "reportSpam", payload: mId })
                        }
                      >
                        report spam
                      </button>

                      <button
                        className="read-button"
                        onClick={() =>
                          dispatch({ type: "marksAsRead", payload: mId })
                        }
                      >
                        {unread ? "mark as read" : "mark as unread"}
                      </button>
                    </div>
                  </div>
                  <hr style={{ margin: "20px 0" }} />
                </li>
              ))
          )}
        </ul>
      </div>
    </div>
  );
};
