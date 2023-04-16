import {legacy_createStore as createStore} from "redux";
import cardReducer from "./cardReducer";

const store = createStore(cardReducer);

export default store;