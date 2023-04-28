import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";
export const Starred = () => {
  const { state } = useMailContext();
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

              <button>delete mail</button>
              <button>mark as read</button>
            </li>
          ))}
      </ul>
    </>
  );
};
