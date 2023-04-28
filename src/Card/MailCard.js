import { useMailContext } from "../Context/MailContext";

export const MailCard = ({ mId, unread, isStarred, subject, content }) => {
  const { dispatch } = useMailContext();
  return (
    <div>
      <h3>{subject}</h3>
      <p>{content}</p>
      <button onClick={() => dispatch({ type: "deleteMail", payload: mId })}>
        delete
      </button>
      <button>report spam</button>
      <button>mark as read</button>
    </div>
  );
};
