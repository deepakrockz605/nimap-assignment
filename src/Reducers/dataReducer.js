import { LOGIN_DETAILS , NEW_PASSWORD_DETAILS } from "../Actions/ActionTypes";
  
  const initState = {
    password : 'deepak123'
  };
  
  const dataReducer = (states = initState, action) => {
    states = states || initState;
    if (action.type === LOGIN_DETAILS) {
      return {
        ...states,
      };
    }
    if (action.type === NEW_PASSWORD_DETAILS) {
        states.password = action.data
        return {
          ...states,
        };
      }
     else {
      return states;
    }
  };
  
  export default dataReducer;