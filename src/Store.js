import { Platform } from 'react-native';
import {
  creatStore,
  applyMiddleware,
  compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers'

const middleware = applyMIddleware(thunk, promise, logger);

const Store = createStore (
  RootReducer,
  compose(
    middleware,
    devtools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    }),
  )
);
