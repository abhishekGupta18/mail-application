export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "deleteMail":
      return {
        ...state,
        inbox: state?.inbox?.filter((item) => item?.mId !== action?.payload),
        trash: [
          ...state.trash,
          state?.inbox?.find((item) => item?.mId === action?.payload),
        ],
      };

    case "reportSpam":
      return {
        ...state,
        inbox: state?.inbox?.filter((item) => item?.mId !== action?.payload),
        spam: [
          ...state.spam,
          state?.inbox?.find((item) => item?.mId === action?.payload),
        ],
      };

    case "starMail":
      return {
        ...state,
        inbox: state?.inbox?.map((item) => {
          if (item?.mId === action?.payload) {
            return { ...item, isStarred: !item?.isStarred };
          } else {
            return item;
          }
        }),
      };

    case "marksAsRead":
      return {
        ...state,
        inbox: state?.inbox?.map((item) => {
          if (item?.mId === action?.payload) {
            return { ...item, unread: !item?.unread };
          } else {
            return item;
          }
        }),
      };

    case "undoDelete":
      return {
        ...state,
        trash: state?.trash.filter((item) => item?.mId !== action.payload),
        inbox: [
          ...state.inbox,
          state?.trash?.find((item) => item?.mId === action.payload),
        ],
      };

    case "undoSpam":
      return {
        ...state,
        spam: state?.spam.filter((item) => item?.mId !== action.payload),
        inbox: [
          ...state.inbox,
          state?.spam?.find((item) => item?.mId === action.payload),
        ],
      };
    default:
      return state;
  }
};
