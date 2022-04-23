import { IS_LOGIN } from "./action";

let obj = JSON.parse(localStorage.getItem("loginUser")) || {
  user: {
    first_name: "",
    last_name: "",
    mobile: 0,
    email: "",
    DOB: "",
    Gender: "",
    password: "",
    userType: "",
    batch_id: "",
  },
};

const initialState = { isLogin: obj };

export const isLoginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOGIN:
      return { ...store, isLogin: payload };
    default:
      return store;
  }
};
