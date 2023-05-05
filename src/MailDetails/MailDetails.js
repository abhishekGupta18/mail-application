import "./MailDetails.css";
import { useParams } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";

import { Header } from "../Component/Header";
export const MailDetails = () => {
  const { state, mails } = useMailContext();
  const { mailId } = useParams();

  const showMail = mails?.find((item) => item?.mId === mailId);
  const { subject, content } = showMail;
  return (
    <div className="detail-page">
      <Header />
      <div className="detail-content">
        <h1> Mail Details</h1>
        <h3>{subject}</h3>
        <p style={{ margin: " 20px 0" }}>{content}</p>
        <hr />
      </div>
    </div>
  );
};
