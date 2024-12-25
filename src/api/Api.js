import axios from "axios";
const baseUrl = "http://hn.algolia.com/api/v1/items/1";

export const getApiCall = (props) => {
 
    axios.get(baseUrl ).then((response) => {
   
      return response.data;
    });
  };