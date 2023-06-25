import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";
import detailReducer from "../store/reducers/detailReducer";
import foodReducer from "../store/reducers/foodReducer";

const rootReducer = combineReducers({
  food: foodReducer,
  detail: detailReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
