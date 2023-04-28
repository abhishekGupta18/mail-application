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
    default:
      return state;
  }
};
