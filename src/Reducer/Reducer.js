export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "deleteMail":
      return {
        ...state,
        inbox: state?.inbox?.filter((item) => item?.mId !== action?.payload),
        trash: [
          ...state.trash,
          state?.inbox.find((item) => item?.mId === action?.payload),
        ],
      };
    default:
      return state;
  }
};
