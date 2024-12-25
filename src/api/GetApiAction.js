import axios from "axios";
const baseUrl = "https://hn.algolia.com/api/v1/search";
const dropDownUrl="https://hn.algolia.com/api/v1/search_by_date"

export const GET_API_REQUEST = "GET_API_REQUEST";
export const  DropDown_API_REQUEST="DropDown_API_REQUEST"

export const GetApiRequest = () => {
  return {
    type: GET_API_REQUEST,
  };
};

export const DropDownApiRequest = () => {
  return {
    type: DropDown_API_REQUEST,
  };
};


export const fetchApiData = (props) => {
  const {Number,page,url,tag} = props;


  return async (dispatch) => {
    dispatch(GetApiRequest());
    const response = await axios.get(`${baseUrl}?hitsPerPage=${Number}&page=${page}&query=${url}&tags=${tag}`);
    return response.data;
  };
};

export const fetchDropDownApiData = (props) => {
  const {tag} = props;


  return async (dispatch) => {
    dispatch(DropDownApiRequest());
    const response = await axios.get(`${dropDownUrl}?tags=${tag}`);
    return response.data;
  };
};




