import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import counterReducer from './store/reducer/counterReducer';
import recordCounterReducer from './store/reducer/recordCounterReducer';

const reducer = combineReducers({
    ctr: counterReducer,
    record: recordCounterReducer
})

const Logger = store => {
    return next => {
          return action => {
                console.log('[middleware] dispatching', action)
                const response = next(action)
                console.log('[middleware] store state', store.getState())
                return response
            }
    }
    
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(Logger, Thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
