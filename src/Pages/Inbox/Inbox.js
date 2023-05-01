import { useMailContext } from "../../Context/MailContext";

import { Header } from "../../Component/Header";
import { MailCard } from "../../Card/MailCard";
// import { mails } from "../../Data/Data";
export const Inbox = () => {
  const { filteredMails, dispatch } = useMailContext();

  return (
    <>
      <Header />
      <div>
        <label>
          show unread mails{" "}
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "showUnread" })}
          />
        </label>

        <label>
          show starred mails{" "}
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "showStarred" })}
          />
        </label>
      </div>

      <h1>This is Inbox</h1>
      <ul>
        {filteredMails?.map((mail) => (
          <li>
            <MailCard {...mail} />
          </li>
        ))}
      </ul>
    </>
  );
};
