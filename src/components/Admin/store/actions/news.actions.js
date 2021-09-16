import axios from "axios";

export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_NEWS = "GET_NEWS";
// Register User
export const addNews = (newsData, history) => dispatch => {
  axios
    .post("/api/news", newsData)
    .then(res => {
      dispatch(getNews())
    })
    .catch(err => {
      console.log(err.response)
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    });
};

export const getNews = (category, history) => dispatch => {
  axios
    .get("/api/news/")
    .then(res => {
      dispatch({
        type: GET_NEWS,
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
