import { useMailContext } from "../../Context/MailContext";

import { Header } from "../../Component/Header";
import { MailCard } from "../../Card/MailCard";
// import { mails } from "../../Data/Data";
export const Inbox = () => {
  const { state } = useMailContext();

  return (
    <>
      <Header />
      <div>
        <input type="checkbox" />
        <label htmlFor="">show unread mails</label>

        <input type="checkbox" />
        <label htmlFor="">show starred mails</label>
      </div>

      <h1>This is Inbox</h1>
      <ul>
        {state?.inbox?.map((mail) => (
          <li>
            <MailCard {...mail} />
          </li>
        ))}
      </ul>
    </>
  );
};
