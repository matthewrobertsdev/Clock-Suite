import { createStore } from "redux";
import AppReducer from './AppReducer';
const modelStore=() => {
    return createStore(AppReducer, null);
};
export default modelStore;