// importing server url
import SERVER_URL from "../utils/server";
import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_SUCCESS,
} from "../constants/productConstants";

export const listProducts = (keyword = "") => async (dispatch) => {
  const URL = SERVER_URL;

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(URL + `/products/${keyword}`);
    console.log(data.count);
    const { count, products } = data;

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: { products, count },
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//product Detail

export const listProductDetails = (id) => async (dispatch) => {
  const URL = SERVER_URL;

  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const { data } = await axios.get(URL + `/products/${id}`);
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
