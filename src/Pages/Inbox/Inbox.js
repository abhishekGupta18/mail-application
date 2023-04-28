import { useMailContext } from "../../Context/MailContext";

import { Header } from "../../Component/Header";
import { MailCard } from "../../Card/MailCard";
// import { mails } from "../../Data/Data";
export const Inbox = () => {
  const { state } = useMailContext();
  console.log(state);
  return (
    <>
      <Header />
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
