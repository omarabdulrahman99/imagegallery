import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import {watchLoadImages} from './sagas'
import App from './App';
import * as serviceWorker from './serviceWorker';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadImages);

ReactDOM.render(

  <Provider store={store}>
	<App />
  </Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
