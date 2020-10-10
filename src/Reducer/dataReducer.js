import { USER_DETAILS } from "../Actions/action-types";
  
  const initState = {
    
  };
  
  const dataReducer = (states = initState, action) => {
    states = states || initState;
    if (action.type === USER_DETAILS) {
      console.log('Connected')
      return {
        ...states,
      };
    }
     else {
      return states;
    }
  };
  
  export default dataReducer;