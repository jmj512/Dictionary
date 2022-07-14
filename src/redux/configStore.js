import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";

const middlewares = [thunk];                                // 파이어스토어랑 통신하는 함수 = middleware. 그 미들웨어 중 하나의 이름이 thunk!
const rootReducer = combineReducers({ dictionary });
const enhancer = applyMiddleware(...middlewares);           // middleware를 묶은 게 enhancer

const store = createStore(rootReducer, enhancer);           // reducer 묶은 rootreducer랑 옵셔널한 것들 enhancer가 합쳐진 게 store!

export default store;