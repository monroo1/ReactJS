export const reducer = (
  state = { name: "Name", phone: "+7 999 111 22 99", userName: "@userName1" },
  action
) => {
  switch (action.type) {
    case "form":
      return {
        ...state,
        name: state.name,
        phone: state.phone,
        userName: state.userName,
      };
    default:
      return state;
  }
};
