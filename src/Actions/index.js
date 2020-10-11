import { LOGIN_DETAILS , NEW_PASSWORD_DETAILS } from "./ActionTypes";

export const loginDetails = () => {
    return {
      type: LOGIN_DETAILS,
    };
  };

  export const newPasswordDetails = (data) => {
    return {
      type: NEW_PASSWORD_DETAILS,
      data,
    };
  };