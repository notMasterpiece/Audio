import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import rootReducers from '../modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ thunk ];

const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(...middleware)));
export default store;