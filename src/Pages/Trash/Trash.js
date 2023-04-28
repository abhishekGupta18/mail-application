import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";

export const Trash = () => {
  const { state } = useMailContext();
  return (
    <>
      <Header />
      <ul>
        {state?.trash.map(({ mId, unread, isStarred, subject, content }) => (
          <div>
            <h3>{subject}</h3>
            <p>{content}</p>

            <button>report spam</button>
            <button>mark as read</button>
          </div>
        ))}
      </ul>
    </>
  );
};
