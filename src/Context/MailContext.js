import { createContext, useContext, useReducer } from "react";

import { mails } from "../Data/Data";
import { reducerFunction } from "../Reducer/Reducer";

export const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    inbox: mails,
    spam: [],
    trash: [],
    starredMail: false,
    unredMail: false,
  });

  const filteredMails = state?.inbox?.filter(
    (mail) =>
      (state.starredMail && mail.isStarred) ||
      (state.unredMail && mail.unread) ||
      (!state.starredMail && !state.unredMail)
  );

  const unReadMails = filteredMails?.filter(({ unread }) => unread).length;
  return (
    <MailContext.Provider
      value={{ state, dispatch, mails, filteredMails, unReadMails }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMailContext = () => {
  return useContext(MailContext);
};
