import "./Inbox.css";

import { useMailContext } from "../../Context/MailContext";
import { Header } from "../../Component/Header";
import { MailCard } from "../../Card/MailCard";

import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

export const Inbox = () => {
  const { filteredMails, dispatch, unReadMails } = useMailContext();

  return (
    <div className="Inbox-page">
      <Header />
      <div className="inbox-mails">
        <h1>
          {" "}
          <MailOutlinedIcon />
          Mail BOX
        </h1>

        <fieldset className="inbox-filters">
          <legend>Filters</legend>
          <label>
            {" "}
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "showUnread" })}
            />
            Show unread mails
          </label>

          <label>
            {" "}
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "showStarred" })}
            />
            Show starred mails
          </label>
        </fieldset>

        <h3>Unreads: {unReadMails}</h3>
        <ul>
          {filteredMails?.map((mail) => (
            <li style={{ listStyle: "none" }}>
              <MailCard {...mail} />
              <hr style={{ margin: "20px 0" }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
