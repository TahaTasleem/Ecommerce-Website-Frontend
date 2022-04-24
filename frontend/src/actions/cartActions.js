import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM
} from "../constants/cartConstants";
import URL from "../utils/server";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(URL + `/products/${id}`);
  const { product } = await data;
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      qty,
    },
  });

  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const addToWishlist = (id,qty) => async (dispatch, getState) => {
  const { data } = await axios.get(URL + `/products/${id}`);
  const { product } = await data;
  dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: {
      product: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: product.quantity,qty
    },
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};

export const removeFromWishlist = (id) => (dispatch, getState) => {
  dispatch({
    type:WISHLIST_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};

// Shipping actions
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// Payment actions
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
