import { GET_API_REQUEST,  Page_API_REQUEST,DropDown_API_REQUEST } from "../api/GetApiAction.js";

const initialState = {
  isLoading: false,
  error: null,
  Login: [],
};

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

  
      return {
        ...state,
        isLoading: true,
        error: null,
        Login: action.payload,
      };
   
      case DropDown_API_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
    default:
      return state;
  }
};

export default getReducer;
