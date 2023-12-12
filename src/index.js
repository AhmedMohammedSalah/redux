import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import axios from "axios";
import { compose } from 'redux';
// import App from './App';

// // Action 
// const increment = () => {
//   return {
//     type: 'INC',
//     payload:2
//   }
// } 
// const decrement = () => {
//   return {
//     type: 'INC',
//     payload: 1
//   }
// }
// // Reducer
// const counter = ( state = 0, action ) => {
//   switch ( action.type ) {
//     case 'INC': return state + action.payload;
//     case 'DEC': return state - action.payload;
//     default: return state;
//   }
// }
// // Store 
// let store =createStore(counter)
// store.subscribe(()=>console.log(store.getState()))

// // Dispatcher
// store.dispatch( increment() );
// store.dispatch( increment() );
// store.dispatch( increment() );
// store.dispatch( decrement() );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loger = ( store ) => {
  return ( next ) => {
    return ( action ) => {
      console.log('Middleware',action);
      console.log('Middleware',store.getState());
      return next(action)
    }
  }
}
const loginFetch = ( store ) => ( next ) => async( action ) => {
  if ( action.type === 'IN' ) {
    let res = await axios.get( 'https://jsonplaceholder.typicode.com/users' );
    action.payload = res.data[2].name;
  }
  return next( action )
}
let store = createStore( reducers,
  composeEnhancers(
    applyMiddleware(loger,loginFetch)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* Class App */}
      {/* <APP /> */}
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
