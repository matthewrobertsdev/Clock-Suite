import { createStore } from "redux";
import AppReducer from './AppReducer';
const createModelStore=() => {
    return createStore(AppReducer);
};
export default createModelStore;