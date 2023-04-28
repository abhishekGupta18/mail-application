import { useParams } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";

import { Header } from "../Component/Header";
export const MailDetails = () => {
  const { state, mails } = useMailContext();
  const { mailId } = useParams();

  const showMail = mails?.find((item) => item?.mId === mailId);
  const { subject, content } = showMail;
  return (
    <>
      <Header />
      <div>
        <h3>{subject}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};
