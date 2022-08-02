import {applyMiddleware, compose , createStore} from 'redux';
import thunk from 'redux-thunk'

const initialState ={};
const middleWare =[thunk];

const store = createStore(()=>
[],
initialState,
compose(applyMiddleware(...middleWare),
window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;
