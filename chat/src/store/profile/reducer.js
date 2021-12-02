import { UPDATE_PROFILE } from "./types";

const initialState = {
  name: "Name",
  phone: "+7 999 111 22 99",
  userName: "@userName1",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
