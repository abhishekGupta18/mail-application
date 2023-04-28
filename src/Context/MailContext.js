import { createContext, useContext, useReducer } from "react";

import { mails } from "../Data/Data";
import { reducerFunction } from "../Reducer/Reducer";

export const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    inbox: mails,
    spam: [],
    trash: [],
    starred: [],
  });
  console.log(state);
  return (
    <MailContext.Provider value={{ state, dispatch, mails }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMailContext = () => {
  return useContext(MailContext);
};
