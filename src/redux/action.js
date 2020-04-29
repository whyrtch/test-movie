import axios from 'axios';

export const getProductAction =()=> {

  return (dispatch) => {
      dispatch({
          type : 'GET_PRODUCT'
      });

      axios.get("https://www.omdbapi.com/?apiKey=b445ca0b&s=avenger")
          .then(res => {
              dispatch({
                  type: 'GET_PRODUCT_SUCCESS',
                  payload: res.data.Search
              })
          })
          .catch(err => {
              dispatch({
                  type: 'GET_PRODUCT_FAILED'
              });
              throw err;
          })
  }
};

export const getSelectedProductAction = (product) => {
  return (dispatch) => {
      dispatch({
          type: 'GET_SELECTED_PRODUCT',
          payload: product
      });
  }
};
