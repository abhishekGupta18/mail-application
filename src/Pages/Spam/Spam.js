import { Header } from "../../Component/Header";

import { useMailContext } from "../../Context/MailContext";
export const Spam = () => {
  const { state } = useMailContext();
  return (
    <>
      <Header />
      <h1>This is Spam</h1>
      <ul>
        {state?.spam?.map(({ mId, unread, isStarred, subject, content }) => (
          <div>
            <h3>{subject}</h3>
            <p>{content}</p>

            <button>delete mail</button>
            <button>mark as read</button>
          </div>
        ))}
      </ul>
    </>
  );
};
