import {
  FOOD_PENDING,
  FOOD_REJECT,
  FOOD_SUCCESS,
  FOOD_DETAIL_PENDING,
  FOOD_DETAIL_SUCCESS,
  FOOD_DETAIL_REJECT,
} from "./actionType";

const BASE_URL = "http://localhost:3000/pub/";
export const foodPending = () => {
  return {
    type: FOOD_PENDING,
  };
};
export const foodReject = (errorMessage) => {
  return {
    type: FOOD_REJECT,
    payload: errorMessage,
  };
};

export const foodSuccess = (food) => {
  return {
    type: FOOD_SUCCESS,
    payload: food,
  };
};

export const fetchFromFood = () => async (dispatch, getState) => {
  dispatch(foodPending());
  try {
    const response = await fetch(`${BASE_URL}item`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const responseJson = await response.json();

    dispatch(foodSuccess(responseJson));
  } catch (error) {
    dispatch(foodReject(error.message));
  }
};

export const detailPending = () => {
  return {
    type: FOOD_DETAIL_PENDING,
  };
};

export const detailSuccess = (food) => {
  return {
    type: FOOD_DETAIL_SUCCESS,
    payload: food,
  };
};
export const detailReject = (error) => {
  return {
    type: FOOD_DETAIL_REJECT,
    payload: error,
  };
};

export const fetchFromDetailFood = (id) => async (dispatch, getState) => {
  dispatch(detailPending());
  try {
    const response = await fetch(`${BASE_URL}item/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const responseJson = await response.json();
    dispatch(detailSuccess(responseJson));
  } catch (error) {
    console.log(error);
    dispatch(detailReject(error));
  }
};
