const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const axios = require("axios");

export const ADD = "ADD";
export const DELETE = "DELETE";
export const GETALL = "GETALL";
export const DETAILS = "DETAILS";
export const UPDATE = "UPDATE";
export const GETALLPRODUCTSFROMONEUSER = "GETALLPRODUCTSFROMONEUSER";

export const getAllProductToState = data => {
  return {
    type: GETALL,
    products: data
  };
};

export const getAllProductFromOneUserToState = (id, data) => {
  return {
    type: GETALLPRODUCTSFROMONEUSER,
    products: data,
    id: id
  };
};

export const addProductToState = value => {
  return {
    type: ADD,
    value: value
  };
};

export const deleteProductToState = id => {
  return {
    type: DELETE,
    id: id
  };
};

export const detailsProductToState = (id, data) => {
  return {
    type: DETAILS,
    id: id,
    product: data
  };
};

export const updateProductToState = (id, value) => {
  return {
    type: UPDATE,
    value: value,
    id: id
  };
};

export const GettAllProduct = () => {
  return dispatch => {
    return axios.get(`${baseUrl}/products/`).then(res => {
      // console.log(res.data);
      dispatch(getAllProductToState(res.data));
    });
  };
};

export const GettAllProductFromOneUser = id => {
  return dispatch => {
    axios.get(`${baseUrl}/users/${id}`).then(res => {
      dispatch(getAllProductFromOneUserToState(id, res.data));
    });
  };
};

export const addProduct = product => {
  return dispatch => {
    product.userId = localStorage.getItem("userid");
    return axios.post(`${baseUrl}/products/`, product).then(res => {
      dispatch(addProductToState(product));
    });
  };
};

export const deleteProduct = id => {
  return dispatch => {
    axios.delete(`${baseUrl}/products/${id}`).then(res => {
      dispatch(deleteProductToState(id));
    });
  };
};

export const detailsProduct = id => {
  return dispatch => {
    axios.get(`${baseUrl}/products/${id}`).then(res => {
      dispatch(detailsProductToState(id, res.data));
    });
  };
};

export const updateProduct = (id, productUpdated) => {
  return dispatch => {
    return axios
      .patch(`${baseUrl}/products/${id}`, productUpdated)
      .then(res => {
        dispatch(updateProductToState(id, productUpdated));
      });
  };
};
