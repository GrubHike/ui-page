import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/reducers';

const thunk=require("redux-thunk").default;
const store=createStore(reducers,applyMiddleware(thunk));
export default store;