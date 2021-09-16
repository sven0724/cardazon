import axios from "axios";

export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
// Register User
export const addProduct = (productData, history) => dispatch => {
  axios
    .post("/api/product", productData)
    .then(res => {
      dispatch(getProduct(productData.category))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateProduct = (productData, history) => dispatch => {
  axios
    .put("/api/product/"+productData._id, productData)
    .then(res => {
      dispatch(getProduct(productData.category))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getProduct = (category, history) => dispatch => {
  axios
    .get("/api/product/get/"+category)
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addFullz = (fullzData, history) => dispatch => {
  axios
    .post("/api/fullz", fullzData)
    .then(res => {
      dispatch(getFullz(history))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateFullz = (fullzData, history) => dispatch => {
  axios
    .put("/api/fullz/"+fullzData._id, fullzData)
    .then(res => {
      dispatch(getFullz(history))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getFullz = (history) => dispatch => {
  axios
    .get("/api/fullz/get")
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
