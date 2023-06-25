import {
  REGISTER_PENDING,
  REGISTER_REJECT,
  REGISTER_SUCCESS,
} from "../action/actionType";

const initialState = {
  pending: false,

  reject: null,
};
