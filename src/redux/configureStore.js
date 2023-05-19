import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/rootSaga';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  userReducer

});
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
sagaMiddleWare.run(watcherSaga);
export default store;
