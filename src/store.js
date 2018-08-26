import {createStore, applyMiddleware, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import thunk from 'redux-thunk';
//BLACKLIST
const persistConfig = {
  key: 'root',
  storage: storage,
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer)

//compose needed to apply thunk and redux dev tools.
const store = createStore(
  persistedReducer,  
  initialState, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

let persistor = persistStore(store)

export { store, persistor }
